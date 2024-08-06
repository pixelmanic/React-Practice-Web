import { useParams } from "react-router-dom";

const ProductDetails = () => {
    const { id } = useParams();
    return ( 
        <>
            <h1>Product Details</h1>
            <span>{id}</span>
        </>
     );
}
 
export default ProductDetails;