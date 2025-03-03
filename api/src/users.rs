use super::ApiTags;
use models::users::UserId;
use models::{
    auth::BearerToken,
    users::{User, UserRole},
};
use poem::error::InternalServerError;
use poem::{web::Data, Result};
use poem_openapi::types::Email;
use poem_openapi::{param::Path, payload::Json, Object, OpenApi};
use sqlx::PgPool;

pub struct UserRoutes;
#[OpenApi(prefix_path = "/users", tag = "ApiTags::Users")]
impl UserRoutes {
    #[oai(path = "/", method = "get")]
    async fn index(
        &self,
        Data(pool): Data<&PgPool>,
        token: BearerToken,
    ) -> Result<Json<Vec<User>>> {
        token.parse()?.require_role(UserRole::Admin)?;
        Ok(Json(User::list(pool).await?))
    }

    #[oai(path = "/:user_id", method = "get")]
    async fn get_id(
        &self,
        Path(user_id): Path<UserId>,
        Data(pool): Data<&PgPool>,
        token: BearerToken,
    ) -> Result<Json<User>> {
        let auth = token.parse()?;
        if auth.user_id != user_id {
            auth.require_role(UserRole::Admin)?;
        }

        Ok(Json(user_id.into_user(pool).await?))
    }
}

#[derive(Object)]
pub struct RegisterUser {
    #[oai(validator(max_length = 100))]
    email: Email,
    #[oai(validator(max_length = 50))]
    first_name: Option<String>,
    #[oai(validator(max_length = 50))]
    last_name: Option<String>,
    #[oai(validator(max_length = 72, min_length = 7))]
    password: String,
}

#[derive(Object)]
struct AuthResponse {
    message: String,
    token: String,
}

pub struct AuthRoutes;
#[OpenApi(prefix_path = "/auth", tag = "ApiTags::Users")]
impl AuthRoutes {
    /// Gets the current user
    #[oai(path = "/user", method = "get")]
    async fn get_user(&self, Data(pool): Data<&PgPool>, token: BearerToken) -> Result<Json<User>> {
        Ok(Json(token.parse()?.user_id.into_user(pool).await?))
    }

    #[oai(path = "/register", method = "post")]
    async fn register(
        &self,
        Json(user): Json<RegisterUser>,
        Data(pool): Data<&PgPool>,
    ) -> Result<Json<AuthResponse>> {
        let user = User::create(
            pool,
            user.email.0,
            user.first_name,
            user.last_name,
            user.password,
        )
        .await?;

        let jwt = user.create_jwt().map_err(InternalServerError)?;

        Ok(Json(AuthResponse {
            message: "Registered successfully".to_string(),
            token: jwt,
        }))
    }
}
