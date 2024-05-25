import { Knex } from "knex";

export async function up(knex: Knex): Promise<void> {
  return knex.schema.createTable("orders", (table: Knex.TableBuilder) => {
    table.increments("id").primary();
    table.integer("user_id").unsigned().notNullable();
    table.integer("car_id").unsigned().notNullable();
    table.string("start_rent").notNullable();
    table.string("finish_rent").notNullable();
    table.integer("total_cost").notNullable();
    table.timestamp("created_at").defaultTo(knex.fn.now());
    table.timestamp("updated_at").defaultTo(knex.fn.now());
  });
}

export async function down(knex: Knex): Promise<void> {}
