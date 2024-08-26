import { useEffect, useState } from "react";
import Card from "./Card";
import axios from "axios";
import useAxios from "../useAxios";

import { CleaningServicesSharp } from "@mui/icons-material";
import ProductCard from "./ProductCard";
import { Link } from "react-scroll";

const About = () => {
  const { data, isLoading, isError } = useAxios(
    "https://fakestoreapi.com/products"
  );

  // const handleDelete = (id) => {
  //   const newData = products.filter((product) => product.id !== id);
  //   setProducts(newData);
  // };
  console.log(data);
  return (
    <>
      {/* <div>
        <h1>{name}</h1>
        <button onClick={(e) => setName(e.target.textContent)}>done</button>
        <button onClick={(e) => setName(e.target.textContent)}>hello</button>
        <button onClick={(e) => setName(e.target.textContent)}>world</button>
        <button onClick={(e) => setName(e.target.textContent)}>design</button>
      </div> */}
      <Link key="4" to="4" smooth={true} duration={500} spy={true} >Click me</Link> 
      {isLoading && <div>Loading....</div>}
      {data && <Card data={data} />}
      {isError && (
        <div style={{ color: "red", fontSize: "40px" }}>{isError}</div>
      )}
    </>
  );
};

export default About;
