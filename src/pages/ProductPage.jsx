import { useParams } from "react-router-dom";
import { items } from "../assets/data/AllData";

function ProductPage() {
  const { id: productId } = useParams();

  const product = items.find((item) => item.id === Number(productId));
  console.log(product);
  return <div className="mt-28 p-10">Product Page</div>;
}

export default ProductPage;
