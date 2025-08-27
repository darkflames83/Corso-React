import { useEffect, useState } from "react";
import Navbar from "../Navbar";

function About() {
  const [cities, setCities] = useState([]);

  useEffect(() => {
    fetch("/.netlify/functions/getCities")
      .then((res) => res.json())
      .then((data) => setCities(data));
  }, []);

  return (
    <>
      <Navbar />
      {cities.map((city) => (
        <p key={city.id}>{city.nome}</p>
      ))}
      <h1 className="text-3xl font-bold">Pagina About!</h1>
    </>
  );
}

export default About;
