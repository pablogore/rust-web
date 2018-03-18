use super::context::Context;
use juniper::FieldResult;
use models::user::User;
use db;

graphql_object!(User: Context |&self| {
    field id() -> i32 {
        self.id
    }

    field email() -> &str {
        &self.email
    }

    field is_following(&executor) -> FieldResult<bool> {
        Ok(db::users::is_following(&*executor.context().conn, self.id, self.id)?)
    }
});