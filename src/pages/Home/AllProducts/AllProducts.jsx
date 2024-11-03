import { useContext } from "react";
import { ProductContext } from "../../../provider/ProductProvider";
import Product from "./Product";

const AllProducts = () => {
    const { products } = useContext(ProductContext);
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {
                products.map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default AllProducts;