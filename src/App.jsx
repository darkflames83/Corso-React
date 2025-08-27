import "./App.css";
import CardElement from "./components/CardElement";
import CardForm from "./components/CardForm";
import Example from "./components/Example";
import { useSelector } from "react-redux";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar></Navbar>
      <Example></Example>
      <CardForm></CardForm>
    </>
  );
}

export default App;
