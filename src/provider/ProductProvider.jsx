import { createContext, useEffect, useState } from "react";

export const ProductContext = createContext(null)
const ProductProvider = ({ children }) => {
    const [categories, setCategories] = useState([]);
    const [products, setProducts] = useState([]);
    const [carts, setCarts] = useState([]);
    const [lists, setLists] = useState([]);
    const [feedback, setFeedback] = useState([]);

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

    useEffect(() => {
        fetch('/feedback.json')
            .then(res => res.json())
            .then(data => setFeedback(data))
    }, [])


    const productInfo = {
        categories,
        products,
        carts,
        setCarts,
        lists,
        setLists,
        feedback
    }

    return (
        <ProductContext.Provider value={productInfo}>
            {children}
        </ProductContext.Provider>
    );
};

export default ProductProvider;