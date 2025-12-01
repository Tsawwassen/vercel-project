// src/lib/db.ts
import { drizzle } from 'drizzle-orm/neon-http';
import { neon } from '@neondatabase/serverless';
import dotenv from 'dotenv';
dotenv.config({ path: '.env.local' });

const connection = neon(process.env.DATABASE_URL!); // Neon connection object 
export const db = drizzle(connection);
