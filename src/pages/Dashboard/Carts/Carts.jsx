import { useContext } from "react";
import { ProductContext } from "../../../provider/ProductProvider";
import Cart from "./Cart";

const Carts = () => {
    const { carts } = useContext(ProductContext);
    console.log(carts);
    return (
        <div className="grid grid-cols-1 gap-6">
            cart
            {
                carts.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
            }
        </div>
    );
};

export default Carts;