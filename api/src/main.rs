use std::{env, fs};

use poem::{listener::TcpListener, Route, Server};
use poem_openapi::{payload::Json, Object, OpenApi, OpenApiService};

#[derive(Object)]
struct User {
    username: String,
}

struct Api;

#[OpenApi]
impl Api {
    /// Hello world
    #[oai(path = "/", method = "get")]
    async fn index(&self) -> Json<&'static str> {
        Json("Hello World")
    }

    /// Joe (test)
    #[oai(path = "/joe", method = "get")]
    async fn joe(&self) -> Json<User> {
        Json(User {
            username: "Joe".to_owned(),
        })
    }
}

#[tokio::main]
async fn main() {
    let api_service = OpenApiService::new(Api, "Hello World", env!("CARGO_PKG_VERSION"))
        .server("http://localhost:3000");

    let spec_location = env::current_dir().unwrap().join("../spec.yml");
    fs::write(spec_location, api_service.spec_yaml()).unwrap();

    let ui = api_service.swagger_ui();
    let app = Route::new().nest("/", api_service).nest("/docs", ui);

    Server::new(TcpListener::bind("127.0.0.1:3000"))
        .run(app)
        .await
        .unwrap();
}
