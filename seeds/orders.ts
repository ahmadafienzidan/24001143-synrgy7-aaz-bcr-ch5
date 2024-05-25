import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("orders").del();

  // Inserts seed entries
  await knex("orders").insert([
    {
      user_id: 1,
      car_id: 1,
      total_cost: 270000,
      start_rent: new Date(),
      finish_rent: new Date(),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      user_id: 1,
      car_id: 2,
      total_cost: 90000,
      start_rent: new Date(),
      finish_rent: new Date(),
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      user_id: 1,
      car_id: 3,
      total_cost: 44000,
      start_rent: new Date(),
      finish_rent: new Date(),
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
}
