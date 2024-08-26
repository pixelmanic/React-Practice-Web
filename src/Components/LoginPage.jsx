import axios from "axios";
import { useState } from "react";
import { Link } from "react-router-dom";
import Products from "./Products";

const LoginPage = () => {
  const [name, setName] = useState("");
  const [FName, setFName] = useState("");
  const [gender, setGender] = useState("male");
  const blog = [
    { name, FName, gender },
    { name, FName, gender },
  ];

  const handleAdd = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:8001/Products",
        {
          name,
          FName,
          gender,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(() => {
        console.log("new blog added!");
      });
  };

  return (
    <div className="form-back">
      <form onSubmit={handleAdd} className="form">
        <div className="name">
          <label>Name</label>
          <input
            required
            value={name}
            onChange={(e) => setName(e.target.value)}
            type="text"
          />
        </div>
        <div className="name ">
          <label>F/Name</label>
          <input
            required
            value={FName}
            onChange={(e) => setFName(e.target.value)}
            type="text"
          />
        </div>
        <select
          required
          value={gender}
          onChange={(e) => setGender(e.target.value)}
          className="gender"
        >
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
        <button className="addBtn">Add</button>
        <Link to={"/products"}>Products</Link>
      </form>

    <Products data={blog} />
      </div>
  );
};

export default LoginPage;
