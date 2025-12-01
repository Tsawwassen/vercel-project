import { db } from '../../../lib/db';
import { users } from '../../../db/schema';

export async function GET() {
  const user = await db.select().from(users);
  return Response.json({ ok: false, user });
}