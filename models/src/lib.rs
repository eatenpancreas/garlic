pub mod auth;
pub mod users;

pub mod static_env {
    use dotenvy_macro::dotenv;

    pub const OPENAPI_TITLE: &'static str = dotenv!("OPENAPI_TITLE");
    pub const SERVER_BIND_ADDR: &'static str = dotenv!("SERVER_BIND_ADDR");
    pub const API_BASE_URL: &'static str = dotenv!("API_BASE_URL");
    pub const DATABASE_URL: &'static str = dotenv!("DATABASE_URL");
    pub const JWT_SECRET: &'static str = dotenv!("JWT_SECRET");
    const _: () = assert!(!JWT_SECRET.is_empty(), "JWT_SECRET must not be empty");
}
