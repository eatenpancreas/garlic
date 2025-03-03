use bcrypt::hash;
use derived_deref::Deref;
use poem::{error::InternalServerError, Result};
use poem_openapi::{Enum, NewType, Object};
use serde::{Deserialize, Serialize};
use sqlx::{
    prelude::FromRow,
    query, query_as,
    types::{
        chrono::{DateTime, Utc},
        Uuid,
    },
    PgPool,
};

#[derive(sqlx::Type, Enum, Debug, Clone, Copy, PartialEq, PartialOrd, Serialize, Deserialize)]
#[sqlx(type_name = "user_role", rename_all = "UPPERCASE")]
pub enum UserRole {
    Admin = 2,
    Moderator = 1,
    User = 0,
}

#[derive(NewType, Clone, Copy, Debug, PartialEq)]
pub struct UserId(Uuid);

impl From<Uuid> for UserId {
    fn from(value: Uuid) -> Self {
        Self(value)
    }
}

impl UserId {
    pub fn inner_id(&self) -> Uuid {
        self.0
    }

    pub async fn exists(&self, pool: &PgPool) -> Result<bool> {
        Ok(query!("SELECT id FROM users WHERE id = $1", self.0)
            .fetch_optional(pool)
            .await
            .map_err(InternalServerError)?
            .is_some())
    }

    pub async fn into_user(&self, pool: &PgPool) -> Result<User> {
        query_as!(
            User,
            "SELECT id, email, first_name, role AS \"role: UserRole\", last_name, is_active, created_at, updated_at
            FROM users
            WHERE id = $1",
            self.0
        )
        .fetch_one(pool)
        .await.map_err(InternalServerError)
    }
}

#[derive(Object, FromRow, Deref)]
pub struct User {
    #[target]
    id: UserId,
    pub role: UserRole,
    pub email: String,
    pub first_name: Option<String>,
    pub last_name: Option<String>,
    pub is_active: bool,
    pub created_at: DateTime<Utc>,
    pub updated_at: DateTime<Utc>,
}

impl User {
    pub async fn list(pool: &PgPool) -> Result<Vec<User>> {
        query_as!(
            User,
            "SELECT id, email, first_name, last_name, role AS \"role: UserRole\", is_active, created_at, updated_at
                FROM users",
        )
        .fetch_all(pool)
        .await.map_err(InternalServerError)
    }

    pub async fn create(
        pool: &PgPool,
        email: String,
        first_name: Option<String>,
        last_name: Option<String>,
        password: String,
    ) -> Result<User> {
        let hash = hash(password, 12).unwrap();

        query_as!(
            User,
            "INSERT INTO users (email, first_name, last_name, password_hash)
            VALUES ($1, $2, $3, $4)
            RETURNING id, email, first_name, last_name, role AS \"role: UserRole\", is_active, created_at, updated_at",
            email,
            first_name,
            last_name,
            hash,
        )
        .fetch_one(pool)
        .await
        .map_err(InternalServerError)
    }
}
