use api::{create_api, Api};
use poem_openapi::OpenApiService;
use std::{env, fs};

pub fn init_openapi_service() -> OpenApiService<Api, ()> {
    let api_service = OpenApiService::new(
        create_api(),
        env::var("OPENAPI_TITLE").unwrap(),
        env::var("CARGO_PKG_VERSION").unwrap(),
    )
    .server(env::var("API_BASE_URL").unwrap());

    let mut current = env::current_dir().unwrap();

    // Keep going up until we find a Cargo.toml with [workspace] section
    while !current.join("Cargo.toml").exists()
        || !fs::read_to_string(current.join("Cargo.toml"))
            .unwrap_or_default()
            .contains("[workspace]")
    {
        if !current.pop() {
            panic!("Could not find workspace root");
        }
    }

    let spec_location = current.join("spec.yml");
    fs::write(spec_location, api_service.spec_yaml()).unwrap();

    api_service
}
