use chrono::{DateTime, Duration, Utc};
use jsonwebtoken::{decode, encode, DecodingKey, EncodingKey, Header, Validation};
use poem::{error::ResponseError, http::StatusCode};
use poem_openapi::{auth::Bearer, SecurityScheme};
use serde::{Deserialize, Serialize};
use sqlx::types::Uuid;
use thiserror::Error;

use crate::{
    static_env::JWT_SECRET,
    users::{User, UserId, UserRole},
};

#[derive(SecurityScheme)]
#[oai(ty = "bearer")]
pub struct BearerToken(Bearer);

#[derive(Error, Debug)]
#[error("User does not have the required role")]
pub struct RequireRoleError;

impl ResponseError for RequireRoleError {
    fn status(&self) -> StatusCode {
        StatusCode::UNAUTHORIZED
    }
}

#[derive(Error, Debug)]
#[error("Invalid claims")]
pub struct ParseClaimsError;

impl ResponseError for ParseClaimsError {
    fn status(&self) -> StatusCode {
        StatusCode::UNAUTHORIZED
    }
}

#[derive(Debug, Serialize, Deserialize)]
struct Claims {
    sub: String,
    role: UserRole,
    exp: i64,
}

#[derive(Debug, Clone, Copy)]
pub struct Auth {
    pub user_id: UserId,
    pub role: UserRole,
    pub expires: DateTime<Utc>,
}

impl BearerToken {
    pub fn parse(&self) -> Result<Auth, ParseClaimsError> {
        let key = DecodingKey::from_secret(JWT_SECRET.as_bytes());
        let c = decode::<Claims>(&self.0.token, &key, &Validation::default())
            .map_err(|_| ParseClaimsError)?;
        Ok(Auth {
            user_id: Uuid::parse_str(&c.claims.sub)
                .map_err(|_| ParseClaimsError)?
                .into(),
            role: c.claims.role,
            expires: DateTime::from_timestamp(c.claims.exp, 0).ok_or(ParseClaimsError)?,
        })
    }
}

impl Auth {
    pub fn require_role(self, role: UserRole) -> Result<Self, RequireRoleError> {
        match self.role >= role {
            true => Ok(self),
            false => Err(RequireRoleError),
        }
    }
}

impl User {
    pub fn create_jwt(&self) -> Result<String, jsonwebtoken::errors::Error> {
        let key = EncodingKey::from_secret(JWT_SECRET.as_bytes());

        let expiration = (Utc::now() + Duration::hours(24)).timestamp();
        let claims = Claims {
            sub: self.inner_id().to_string(),
            role: self.role.clone(),
            exp: expiration,
        };

        encode(&Header::default(), &claims, &key)
    }
}
