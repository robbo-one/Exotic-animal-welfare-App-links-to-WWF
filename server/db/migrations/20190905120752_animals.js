exports.up = function (knex) {
  return knex.schema.createTable('animals', table => {
    table.increments('id')
    table.string('name')
    table.string('type')
    table.integer('price')
    table.string('location')
    
  })
}

exports.down = function (knex) {
  return knex.schema.dropTable('animals')
}
