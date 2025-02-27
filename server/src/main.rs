mod create_api;

use std::{env};
use create_api::create_api;
use poem::{listener::TcpListener, middleware::Cors, EndpointExt, Route, Server};

#[tokio::main]
async fn main() {
    dotenv::dotenv().unwrap();

    let api_service = create_api();
    let ui = api_service.swagger_ui();
    let app = Route::new()
        .nest("/", api_service)
        .nest("/docs", ui)
        .with(Cors::new().allow_origin_regex("*"));

    Server::new(TcpListener::bind(env::var("SERVER_BIND_ADDR").unwrap()))
        .run(app)
        .await
        .unwrap();
}
