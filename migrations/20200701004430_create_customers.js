
exports.up = function(knex) {
  return  knex.schema.createTable('customers', function (table) {
       table.increments();
       table.string('name').notNullable();
       table.string('email').notNullable();
   })
 };

 exports.down = function(knex) {
  return knex.scheema.dropTable('customers');
};
