/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('split', (table) => {
        table.increments('id').primary();
        table.string('description').notNullable();
        table.decimal('amount', 15, 2).notNullable();
        table.integer('transaction_id').unsigned().notNullable();
        table.foreign('transaction_id').references('transactions.id');
        table.timestamps(true, true);
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  
};
