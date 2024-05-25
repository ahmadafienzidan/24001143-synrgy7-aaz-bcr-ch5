import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("carlist").del();

  // Inserts seed entries
  await knex("carlist").insert([
    {
      id: 1,
      name: "Toyota Avanza",
      rent_cost: 50000,
      size: "Medium",
      image: "avanza.jpg",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 2,
      name: "Honda Jazz",
      rent_cost: 55000,
      size: "Small",
      image: "jazz.jpg",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      id: 3,
      name: "Suzuki Ertiga",
      rent_cost: 60000,
      size: "Small",
      image: "ertiga.jpg",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
}
