use std::{env, fs};

use api::{create_api, Api};
use models::static_env::{OPENAPI_TITLE, VITE_API_BASE_URL};
use poem_openapi::OpenApiService;

pub fn init_openapi_service() -> OpenApiService<Api, ()> {
    let api_service = OpenApiService::new(
        create_api(),
        OPENAPI_TITLE,
        env::var("CARGO_PKG_VERSION").unwrap(),
    )
    .server(VITE_API_BASE_URL);

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
    fs::write(
        spec_location,
        api_service.spec_yaml().replace("; charset=utf-8", ""),
    )
    .unwrap();

    api_service
}
