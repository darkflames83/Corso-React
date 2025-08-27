import Navbar from "../Navbar";
import { neon } from "@netlify/neon";
const nome = "New York";
const sql = neon(); // automatically uses env NETLIFY_DATABASE_URL
const [post] = await sql`SELECT * FROM Citta WHERE id = ${nome}`;

function About() {
  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold">Pagina About!</h1>
    </>
  );
}

export default About;
