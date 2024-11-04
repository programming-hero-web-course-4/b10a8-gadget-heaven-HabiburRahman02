import { useContext } from "react";
import { ProductContext } from "../../../provider/ProductProvider";
import Cart from "./Cart";

const Carts = () => {
    const { carts } = useContext(ProductContext);
    console.log(carts);
    const totalCost = carts.reduce((total, item) => total + item.price, 0);
    console.log(('total', totalCost));
    return (
        <div className="max-w-[1400px] mx-auto mt-12">
            <div className="flex justify-between">
                <h2 className='text-2xl font-semibold'>Cart</h2>
                <div className="flex gap-6 items-center">
                    <h2 className='text-2xl font-semibold'>Total cost: ${totalCost.toFixed(2)}</h2>
                    <button className='btn'>Sort by Price</button>
                    <button className='btn'>Purchase</button>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-6">
                {
                    carts.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
                }
            </div>
        </div>
    );
};

export default Carts;