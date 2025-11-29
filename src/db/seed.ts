// src/db/seed.ts
import { db } from '../lib/db';
import { users } from './schema';

async function main() {
  await db.insert(users).values([
    { email: 'alice@example.com' },
    { email: 'bob@example.com' },
  ]);
  console.log('✅ Seed complete');
}

main().catch(console.error);
