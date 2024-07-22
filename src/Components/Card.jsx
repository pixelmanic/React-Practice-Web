const Card = (prop) => {
  const { data, title } = prop;
  console.log(title);
  return (
    <div>
      {data.map((data) => {
        return (
          <div className="parent">
            <h1 className="title">{data.title}</h1>
            <p>{data.price}</p>
            <p>{data.prevprice}</p>
            {data.images.map((image) => {
              return <img style={{ width: "150px" }} src={image} alt="" />;
            })}
          </div>
        );
      })}
    </div>
  );
};

export default Card;
