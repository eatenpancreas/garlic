mod init_openapi_service;

use init_openapi_service::init_openapi_service;
use poem::{listener::TcpListener, middleware::Cors, EndpointExt, Route, Server};
use sqlx::postgres::PgPoolOptions;
use std::env;

#[tokio::main]
async fn main() {
    dotenv::dotenv().unwrap();

    let pool = PgPoolOptions::new()
        .connect(&env::var("DATABASE_URL").unwrap())
        .await
        .unwrap();

    let api_service = init_openapi_service();
    let ui = api_service.swagger_ui();
    let app = Route::new()
        .nest("/", api_service)
        .nest("/docs", ui)
        .with(Cors::new())
        .data(pool);

    Server::new(TcpListener::bind(env::var("SERVER_BIND_ADDR").unwrap()))
        .run(app)
        .await
        .unwrap();
}
