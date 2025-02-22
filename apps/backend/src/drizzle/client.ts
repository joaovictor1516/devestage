import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { env } from "../env";

export const postgresSql = postgres(env.POSTGRES_URL);
export const database = drizzle(postgresSql);
