/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function (knex) {

    return knex.schema.createTable("transactions", table => {
        table.increments("id").primary();
        table.integer("amount").notNullable();
        table.integer("payerId").notNullable();
        table.string('category').notNullable();
        table.string("description");
        table.timestamp("createdAt").defaultTo(knex.fn.now());
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function (knex) {

};
