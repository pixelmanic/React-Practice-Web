import React, { useState } from "react";
import "../Styles/Home.css";
import Navbar from "./Navbar";

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
      {/* <Navbar /> */}
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
