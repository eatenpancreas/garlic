use api_core::create_api;
use api_routes::Api;

#[test]
fn test_load_spec() {
    dotenv::dotenv().unwrap();
    let _ = create_api(Api);
}
