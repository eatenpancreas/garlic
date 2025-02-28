use std::env;

use jsonwebtoken::{decode, DecodingKey, Validation};
use poem::{error::ResponseError, http::StatusCode};
use poem_openapi::{auth::Bearer, SecurityScheme};
use serde::{Deserialize, Serialize};
use thiserror::Error;

use crate::users::UserRole;

#[derive(SecurityScheme)]
#[oai(ty = "bearer")]
pub struct Permissions(Bearer);

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
pub struct ParseClaimsError(#[from] jsonwebtoken::errors::Error);

impl ResponseError for ParseClaimsError {
    fn status(&self) -> StatusCode {
        StatusCode::UNAUTHORIZED
    }
}

#[derive(Debug, Serialize, Deserialize)]
pub struct Claims {
    sub: String, // user ID
    role: UserRole,
    exp: usize,
}

impl Permissions {
    pub fn parse(&self) -> Result<Claims, ParseClaimsError> {
        let key = DecodingKey::from_secret(env::var("JWT_SECRET").unwrap().as_bytes());
        let c = decode::<Claims>(&self.0.token, &key, &Validation::default())?;
        Ok(c.claims)
    }
}

impl Claims {
    pub fn require_role(&self, role: UserRole) -> Result<&Self, RequireRoleError> {
        match self.role >= role {
            true => Ok(self),
            false => Err(RequireRoleError),
        }
    }
}
