
exports.up = function(knex) {
  return  knex.schema.createTable('products', function (table) {
       table.increments();
       table.float('price').notNullable();
       table.string('image').notNullable();
       table.string('brand').notNullable();
       table.string('title').notNullable();
       table.float('reviewScore').notNullable();

       table.integer('customer_id').notNullable();

       table.foreign('customer_id').references('id').inTable('customers')
   })
 };

 return exports.down = function(knex) {
  knex.scheema.dropTable('products');
};
