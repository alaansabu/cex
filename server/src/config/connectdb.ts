
import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";

let db: ReturnType<typeof drizzle>;

export async function getDB() {
  if (!db) {
    const dbUrl = process.env.DATABASE_URL;
    if (!dbUrl) {
      throw new Error(
        "DATABASE_URL is not set. Make sure your .env file exists and the server is started with --env-file=.env"
      );
    }

    console.log("Connecting to database...");
    const pool = new Pool({ connectionString: dbUrl });

    // Verify the connection is actually alive
    try {
      const client = await pool.connect();
      client.release();
      console.log("Database connected successfully");
    } catch (err) {
      throw new Error(` Database connection failed: ${(err as Error).message}`);
    }

    db = drizzle(pool);
  }
  return db;
}