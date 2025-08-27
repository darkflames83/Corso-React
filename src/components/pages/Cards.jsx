import Navbar from "../Navbar";
import CardElement from "../CardElement";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

function Cards() {
  const cities = useSelector((state) => state.cities.value);
  return (
    <>
      <Navbar></Navbar>
      <h1 className="text-3xl font-bold">Pagina Cards</h1>
      <div className="grid grid-cols-4 gap-5">
        {cities.map((city) => (
          <Link to={`/cards/${city.id}`} key={city.id}>
            <CardElement
              key={city.id}
              title={city.title}
              isVisited={city.isVisited}
              imgUrl={city.imgUrl}
            >
              {city.description}
            </CardElement>
          </Link>
        ))}
      </div>
    </>
  );
}

export default Cards;
