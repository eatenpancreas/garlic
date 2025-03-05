mod users;
use poem_openapi::Tags;
use poem_openapi::{payload::Json, OpenApi};
use users::{AuthRoutes, UserRoutes};

pub type Api = (DemoRoutes, UserRoutes, AuthRoutes);
pub fn create_api() -> Api {
    (DemoRoutes, UserRoutes, AuthRoutes)
}

#[derive(Tags)]
enum ApiTags {
    Demo,
    Users,
}

pub struct DemoRoutes;

#[OpenApi(prefix_path = "/demo", tag = "ApiTags::Demo")]
impl DemoRoutes {
    /// Hello world
    #[oai(path = "/hello", method = "get")]
    async fn hello_from_rust(&self) -> Json<&'static str> {
        Json("Hello From Garlic!")
    }
}
