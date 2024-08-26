const Products = ({data}) => {
    console.log(data)
    return ( <>
        {data.map(product=> {
            return (
                <h1>{product.name}</h1>
            )
        })}
    </> );
}
 
export default Products;