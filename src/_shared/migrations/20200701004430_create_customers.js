exports.up = function (knex) {
  return knex.schema.createTable('customers', (table) => {
    table.increments('id').primary();
    table.string('name').notNullable();
    table.string('email').notNullable();
  });
};
exports.down = function (knex) {
  knex.scheema.dropTable('customers');
};