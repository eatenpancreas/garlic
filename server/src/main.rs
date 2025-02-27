use std::env;

use api_core::create_api;
use api_routes::Api;
use poem::{listener::TcpListener, Route, Server};

#[tokio::main]
async fn main() {
    dotenv::dotenv().unwrap();
    let api_service = create_api(Api);
    let ui = api_service.swagger_ui();
    let app = Route::new().nest("/", api_service).nest("/docs", ui);

    Server::new(TcpListener::bind(env::var("SERVER_BIND_ADDR").unwrap()))
        .run(app)
        .await
        .unwrap();
}
