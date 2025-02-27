#[path = "../src/init_openapi_service.rs"]
mod init_openapi_service;

#[test]
fn test_load_spec() {
    dotenv::dotenv().unwrap();
    let _ = init_openapi_service::init_openapi_service();
}
