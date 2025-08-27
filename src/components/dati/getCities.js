import { neon } from "@netlify/neon";

const sql = neon(); // usa automaticamente la variabile d'ambiente NETLIFY_DATABASE_URL

export default async function handler(req, res) {
  const rows = await sql`SELECT * FROM Citta`;
  return res.json(rows);
}
