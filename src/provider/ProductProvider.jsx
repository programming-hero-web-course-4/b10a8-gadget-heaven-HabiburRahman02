
import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext(null)
const ProductProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('/categories.json')
            .then(res => res.json())
            .then(data => setCategories(data))
    }, [])

    useEffect(() => {
        fetch('/products.json')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])


    const productInfo = {
        categories,
        products,
        setProducts
    }

    return (
        <ProductContext.Provider value={productInfo}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;