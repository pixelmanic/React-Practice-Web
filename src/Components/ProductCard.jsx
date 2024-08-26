import { Link } from "react-router-dom";

const ProductCard = (props) => {
  const { data } = props;

  const cardStyle = {
    border: "1px solid blue",
    margin: "20px",
    background: "#000"
  };

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      {data.length > 0 ? (
        data.map((item) => (
          <Link style={cardStyle} to={`/products/${item.id}`}>
            <div className="parent" key={item.id}>
              <h1 className="title">{item.title}</h1>
              <p>{item.price}</p>
              <p>{item.description}</p>
              <img style={{width:"150px"}} src={item.image} alt="product" />
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

export default ProductCard;
