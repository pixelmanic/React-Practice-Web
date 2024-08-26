import { useNavigate, useParams } from "react-router-dom";
import YouTubeIcon from "@mui/icons-material/YouTube";
import useAxios from "../useAxios";
import axios from "axios";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data, isLoading, isError } = useAxios(
    `http://localhost:8001/products/${id}`
  );

  const dataPro = useAxios(`https://fakestoreapi.com/products/${id}`)

  console.log(dataPro)

  console.log(data.title)

  const handleDelete = () => {
    axios.delete(`http://localhost:8001/products/${id}`).then((res) => {
      navigate("/");
    });
  };
  return (
    <>
      <h1>Product Details</h1>
      <span>{data.id}</span>
      <h1>{data.name ? data.title : data.name}</h1>
      <span>{data.FName}</span>
      <p>{data.gender}</p>
      <YouTubeIcon style={{ color: "red", fontSize: "40px" }} />
      <button onClick={handleDelete}>Delete</button>
    </>
  );
};

export default ProductDetails;
