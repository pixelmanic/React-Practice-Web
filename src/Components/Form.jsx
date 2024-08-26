import axios from "axios";
import { useEffect, useState } from "react";
import useAxios from "../useAxios";

const Form = () => {
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");
  const [category, setCategory] = useState("");
  const [gender, setGender] = useState("female");

  const { data, isLoading, isError } = useAxios(
    "http://localhost:8001/products"
  );

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        "http://localhost:8001/products",
        { title, desc, category, gender },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then((res) => {
        
      });
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <label>Title</label>
        <input
          type="text"
          value={title}
          required
          onChange={(e) => setTitle(e.target.value)}
        />
        <label>Description</label>
        <textarea
          name="description"
          value={desc}
          required
          onChange={(e) => setDesc(e.target.value)}
        ></textarea>
        <label>Category</label>
        <input
          type="text"
          value={category}
          required
          onChange={(e) => setCategory(e.target.value)}
        />
        <select
          name="gender"
          value={gender}
          onChange={(e) => setGender(e.target.value)}
        >
          <option value="male">male</option>
          <option value="female">female</option>
        </select>

        <button type="submit">Submit</button>
      </form>

      {data &&
        data.map((product) => {
          return (
            <div>
              <h1>{product.title}</h1>
              <p>{product.desc}</p>
              <h3>{product.category}</h3>
              <span>{product.gender}</span>
            </div>
          );
        })}
    </>
  );
};

export default Form;
