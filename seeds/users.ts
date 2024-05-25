import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
  // Deletes ALL existing entries
  await knex("users").del();

  // Inserts seed entries
  await knex("users").insert([
    {
      name: "Philip Foden",
      email: "philipfoden47@gmail.com",
      password: "cityzen",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: "John Stones",
      email: "johnstones05@gmail.com",
      password: "cityzen",
      created_at: new Date(),
      updated_at: new Date(),
    },
    {
      name: "Bernardo Carvalho E Silva",
      email: "bernardosilva20@gmail.com",
      password: "cityzen",
      created_at: new Date(),
      updated_at: new Date(),
    },
  ]);
}
