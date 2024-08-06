import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import useAxios from "../useAxios";
import { Link } from "react-router-dom";

const About = () => {
  const { data, isLoading, isError } = useAxios(
    "https://fakestoreapi.com/products"
  );

  // const handleDelete = (id) => {
  //   const newData = products.filter((product) => product.id !== id);
  //   setProducts(newData);
  // };

  return (
    <>
      {/* <div>
        <h1>{name}</h1>
        <button onClick={(e) => setName(e.target.textContent)}>done</button>
        <button onClick={(e) => setName(e.target.textContent)}>hello</button>
        <button onClick={(e) => setName(e.target.textContent)}>world</button>
        <button onClick={(e) => setName(e.target.textContent)}>design</button>
      </div> */}
      <Link to="/">Home</Link>
      <Link to="/contact">Contact</Link>
      {isLoading && <div>Loading....</div>}
      {data && (
        <Card data={data} image="jflksfjlsk"  />
      )}
      {isError && (
        <div style={{ color: "red", fontSize: "40px" }}>{isError}</div>
      )}
    </>
  );
};

export default About;
