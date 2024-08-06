import React, { useState } from "react";
import "../Styles/Home.css";
import Navbar from "./Navbar";
import About from "./About";
import { Link } from "react-router-dom";

export default function Home() {
  const clickMe = (e, event) => {
    console.log("clicked!", e, event.target);
  };
  const [name, setName] = useState("Khalil");

  const inputValue = (e) => {
    setName(e.target.value);
  };
  return (
    <div>
      <Navbar />
      <Link to="/about" >About</Link>
      <h1 className="main-text" style={{ color: "red" }}>
        {name}
      </h1>
      <button onClick={(e) => clickMe("hello", e)}>Click me</button>
      <form>
        <input placeholder="text" type="text" onChange={(e) => inputValue(e)} />
      </form>
    </div>
  );
}
