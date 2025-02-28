use super::ApiTags;
use models::users::UserId;
use models::{
    auth::Permissions,
    users::{User, UserRole},
};
use poem::{web::Data, Result};
use poem_openapi::{param::Path, payload::Json, Object, OpenApi};
use sqlx::PgPool;

pub struct UserRoutes;
#[OpenApi(prefix_path = "/users", tag = "ApiTags::Users")]
impl UserRoutes {
    #[oai(path = "/", method = "get")]
    async fn index(&self, Data(pool): Data<&PgPool>, p: Permissions) -> Result<Json<Vec<User>>> {
        p.parse()?.require_role(UserRole::Admin)?;
        let users = User::list(pool).await?;
        Ok(Json(users))
    }

    #[oai(path = "/:user_id", method = "get")]
    async fn get_id(
        &self,
        Path(user_id): Path<UserId>,
        Data(pool): Data<&PgPool>,
        p: Permissions,
    ) -> Result<Json<User>> {
        p.parse()?.require_role(UserRole::Admin)?;
        if !user_id.exists(pool).await? {}

        Ok(Json(user_id.into_user(pool).await?))
    }
}

#[derive(Object)]
pub struct RegisterUser {
    email: String,
    first_name: Option<String>,
    last_name: Option<String>,
    password: String,
}

pub struct AuthRoutes;
#[OpenApi(prefix_path = "/auth", tag = "ApiTags::Users")]
impl AuthRoutes {
    #[oai(path = "/register", method = "post")]
    async fn register(
        &self,
        Json(user): Json<RegisterUser>,
        Data(pool): Data<&PgPool>,
    ) -> Result<Json<&'static str>> {
        User::create(
            pool,
            user.email,
            user.first_name,
            user.last_name,
            user.password,
        )
        .await?;

        Ok(Json("Registered!"))
    }
}
