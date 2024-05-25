import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("carlist", (table) => {
    table.increments("id").primary();
    table.string("name", 255).notNullable();
    table.integer("rent_cost").notNullable();
    table.string("size", 255).notNullable();
    table.string("image").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {}
