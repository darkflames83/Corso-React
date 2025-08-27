import { useState } from "react";
import { useDispatch } from "react-redux";
import { add } from "./redux/citiesSlice";

function CardForm() {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    imgUrl: "",
    isVisited: false,
  });

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    const inputValue = type == "checkbox" ? checked : value;
    setFormData({
      ...formData,
      [name]: inputValue,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const city = {
      id: Math.random(),
      title: formData.name,
      description: formData.description,
      isVisited: formData.isVisited,
      imgUrl: formData.imgUrl,
    };
    setFormData({
      name: "",
      description: "",
      imgUrl: "",
      isVisited: false,
    });
    dispatch(add(city));
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-3 w-80 mb-10 bg-amber-100 p-5 rounded-md text-zinc-950"
    >
      <div className="flex flex-col">
        <label>Nome Città</label>
        <input
          name="name"
          className="border border-teal-500 rounded-sm"
          type="text"
          value={formData.name}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex flex-col">
        <label>Descrizione</label>
        <textarea
          name="description"
          className="border border-teal-500 rounded-sm"
          value={formData.description}
          onChange={handleInputChange}
        ></textarea>
      </div>

      <div className="flex flex-col">
        <label>Immagine</label>
        <input
          name="imgUrl"
          className="border border-teal-500 rounded-sm"
          type="text"
          value={formData.imgUrl}
          onChange={handleInputChange}
        />
      </div>

      <div className="flex flex-col">
        <label>Visitata</label>
        <input
          name="isVisited"
          className="border border-teal-500 rounded-sm"
          type="checkbox"
          checked={formData.isVisited}
          onChange={handleInputChange}
        />
      </div>
      <button className="text-white" type="submit">
        Aggiungi Card
      </button>
    </form>
  );
}
export default CardForm;
