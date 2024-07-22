import React, { useState } from "react";
import dev from "../Images/cartoon-man-wearing-vr-glasses.jpg";
import Card from "./Card";

export default function Navbar() {
  const [product, setProduct] = useState([
    {
      id: 1,
      title: "Keila reversible coat",
      price: "135,99",
      prevprice: "169,95",
      images: [
        "https://rino-pelle.com/cdn/shop/files/Fusion.7002310_morel_01_e02fb4b5-c155-474e-9b78-1862d0bfc540.jpg?v=1689665153",
        "https://rino-pelle.com/cdn/shop/files/Fusion.7002310_morel_02.jpg?v=1689665155",
        "https://rino-pelle.com/cdn/shop/files/Fusion.7002310_morel_03.jpg?v=1689665157",
      ],
    },
    {
      id: 2,
      title: "lkfjklafjdklf;skfikwe",
      price: "345,99",
      prevprice: "169,95",
      images: [
        "https://rino-pelle.com/cdn/shop/files/Fusion.7002310_morel_01_e02fb4b5-c155-474e-9b78-1862d0bfc540.jpg?v=1689665153",
        "https://rino-pelle.com/cdn/shop/files/Fusion.7002310_morel_02.jpg?v=1689665155",
  
      ],
    },
    {
      id: 3,
      title: "asfdjkweihjknvine",
      price: "173,99",
      prevprice: "169,95",
      images: [
        "https://rino-pelle.com/cdn/shop/files/Fusion.7002310_morel_01_e02fb4b5-c155-474e-9b78-1862d0bfc540.jpg?v=1689665153",
      ],
    },
  ]);

  return <div>
    <Card data={product} title="All Products" />
  </div>;
}
