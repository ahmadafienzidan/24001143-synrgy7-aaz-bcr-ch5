import type { Knex } from "knex";

// Update with your config settings.
const config: { [key: string]: Knex.Config } = {
  development: {
    client: "pg",
    connection: {
      user: "postgres",
      password: "Whiteshadow",
      port: 5432,
      host: "localhost",
      database: "ch5",
    },
  },
};

export default config;
