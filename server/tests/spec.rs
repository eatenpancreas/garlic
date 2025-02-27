#[path = "../src/create_api.rs"]
mod create_api;

use create_api::create_api;

#[test]
fn test_load_spec() {
    dotenv::dotenv().unwrap();
    let _ = create_api();
}
