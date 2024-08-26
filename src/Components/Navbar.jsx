import React, { useState } from "react";
import dev from "../Images/cartoon-man-wearing-vr-glasses.jpg";
import Card from "./Card";
import useAxios from "../useAxios";

export default function Navbar() {
  const { data, isLoading, isError } = useAxios(
    "http://localhost:8001/products"
  );

  return (
    <div>
      <Card
        data={data}
        image="fjklafjkldsajfakl"
      />
    </div>
  );
}
