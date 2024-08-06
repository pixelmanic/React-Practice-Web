import { Link } from "react-router-dom";

const Card = (prop) => {
  const { data, image, handleDelete } = prop;

  return (
    <div>
      {data.length > 0 ? (
        data.map((item) => (
          <Link to={`/products/${item.id}`} >
            <div className="parent" key={item.id}>
              <h1 className="title">{item.title}</h1>
              <p>{item.price}</p>
              {item.prevprice && <p>{item.prevprice}</p>}{" "}
              {/* Conditionally render if prevprice exists */}
              {/* {item.images && item.images.length > 0 && item.images.map((image, index) => (
            <img key={index} style={{ width: "150px" }} src={image} alt="" />
          ))} */}
              <img style={{ width: "150px" }} src={item.image} alt="" />
              <button onClick={() => handleDelete(item.id)}>Delete</button>
            </div>
          </Link>
        ))
      ) : (
        <p>Loading...</p>
      )}{" "}
      {/* Display loading message if data is not yet available */}
    </div>
  );
};

export default Card;
