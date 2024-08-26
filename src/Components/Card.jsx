import { Link } from "react-router-dom";

const Card = (prop) => {
  const { data, image } = prop;

  const cardStyle = {
    border: "1px solid red",
    margin: "10px"
  }

  return (
    <div style={{display:"flex", flexDirection:"column"}}>
      {data.length > 0 ? (
        data.map((item) => (
          <Link style={cardStyle} to={`/products/${item.id}`} >
            <div id={item.id} className="parent" key={item.id}>
              <h1 className="title">{item.title ? item.title : item.name}</h1>
              <p>{item.price ? item.price : item.FName}</p>
              <img src={item.image ? item.image : ""} alt="" />
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
