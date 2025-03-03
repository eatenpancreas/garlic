#[path = "../src/init_openapi_service.rs"]
mod init_openapi_service;

#[test]
fn test_load_spec() {
    let _ = init_openapi_service::init_openapi_service();
}
