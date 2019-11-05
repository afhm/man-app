function up(knex) {
  return knex.schema.createTable("users", table => {
    table.string("base_user_id").primary();
    table.string("user_email").unique();
    table.string("username");

    table.boolean("is_admin_user");
    table.boolean("is_email_verified");
    table.boolean("is_deleted");
    table.string("user_password");
    table.timestamps();
  });
}

function down(knex) {
  return knex.schema.dropTable("users");
}

module.exports = {
  up,
  down,
};
