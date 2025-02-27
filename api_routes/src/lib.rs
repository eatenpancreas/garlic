use poem_openapi::param::Path;
use poem_openapi::{payload::Json, Object, OpenApi};

#[derive(Object)]
pub struct User {
    username: String,
}

pub struct IndexRoutes;

#[OpenApi]
impl IndexRoutes {
    /// Hello world
    #[oai(path = "/", method = "get")]
    async fn index(&self) -> Json<&'static str> {
        Json("Hello World")
    }

    /// Echo
    #[oai(path = "/echo", method = "post")]
    async fn echo(&self, noise: Json<String>) -> Json<String> {
        noise
    }
}

pub struct CustomerRoutes;
#[OpenApi(prefix_path = "/customer/:customer_id")]
impl CustomerRoutes {
    #[oai(path = "/", method = "get")]
    async fn hello(&self, customer_id: Path<String>) -> Json<String> {
        Json(format!("Hello {}!", customer_id.0))
    }
}
