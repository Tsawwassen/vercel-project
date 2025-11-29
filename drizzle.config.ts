import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });
/**
 * File used to config drizzle connection
 * 
 */

import type { Config } from "drizzle-kit";

export default {
  schema: './src/db/schema.ts',
  out: './drizzle',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.DATABASE_URL!, 
  },
} satisfies Config;
