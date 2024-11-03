import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../provider/ProductProvider";
import Product from "./Product";
import { useParams } from "react-router-dom";

const AllProducts = () => {
    const { products, setProducts } = useContext(ProductContext);
    const { category } = useParams();
    const [newProducts, setNewProducts] = useState([]);
    console.log(category);


    useEffect(() => {
        const filterByCategory = [...products].filter(pd => pd.category === category)
        setNewProducts(filterByCategory)
    }, [category, products])



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {
                newProducts.map(product => <Product key={product.id} product={product}></Product>)
            }
        </div>
    );
};

export default AllProducts;