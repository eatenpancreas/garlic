mod init_openapi_service;

use init_openapi_service::init_openapi_service;
use models::static_env::{DATABASE_URL, JWT_SECRET, SERVER_BIND_ADDR, VITE_API_BASE_URL};
use poem::{listener::TcpListener, middleware::Cors, EndpointExt, Route, Server};
use sqlx::postgres::PgPoolOptions;

#[tokio::main]
async fn main() {
    assert!(!JWT_SECRET.is_empty(), "JWT_SECRET must not be empty");

    let pool = PgPoolOptions::new().connect(DATABASE_URL).await.unwrap();

    let api_service = init_openapi_service();
    let ui = api_service.swagger_ui();
    let app = Route::new()
        .nest("/", api_service)
        .nest("/docs", ui)
        .with(Cors::new())
        .data(pool);

    println!();
    println!("🧄 Check the docs at \x1b]8;;{VITE_API_BASE_URL}/docs\x1b\\{VITE_API_BASE_URL}/docs\x1b]8;;\x1b\\ 🧄");

    Server::new(TcpListener::bind(SERVER_BIND_ADDR))
        .run(app)
        .await
        .unwrap();
}
