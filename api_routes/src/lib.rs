use poem_openapi::{payload::Json, Object, OpenApi};

#[derive(Object)]
pub struct User {
    username: String,
}

pub struct Api;

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
