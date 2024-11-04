import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../../../provider/ProductProvider";
import Product from "./Product";
import { useParams } from "react-router-dom";

const AllProducts = () => {
    const { products } = useContext(ProductContext);
    const { category } = useParams();
    const [newProducts, setNewProducts] = useState([]);
    console.log(category);


    useEffect(() => {
        if (category) {
            const filterByCategory = [...products].filter(pd => pd.category === category)
            setNewProducts(filterByCategory)
        }
        else {
            setNewProducts(products.slice(0, 6))
        }
    }, [category, products])



    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

            {
                newProducts.length ? newProducts.map(product => <Product key={product.id} product={product}></Product>)
                    : <h2 className="text-3xl text-[#9538E2] font-semibold">No Data Found</h2>
            }
        </div>
    );
};

export default AllProducts;