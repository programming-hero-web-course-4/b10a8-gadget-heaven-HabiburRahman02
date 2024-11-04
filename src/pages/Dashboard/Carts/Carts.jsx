import { useContext } from "react";
import { ProductContext } from "../../../provider/ProductProvider";
import Cart from "./Cart";
import { LiaUtensilsSolid } from "react-icons/lia";

const Carts = () => {
    const { carts, setCarts } = useContext(ProductContext);
    const totalCost = carts.reduce((total, item) => total + item.price, 0);

    const sortByPrice = type => {
        if (type === 'price') {
            const sort = [...carts].sort((a, b) => b.price - a.price);
            setCarts(sort)
        }
    }

    return (
        <div className="max-w-[1400px] mx-auto mt-12">
            <div className="flex justify-between">
                <h2 className='text-2xl font-semibold'>Cart</h2>
                <div className="md:flex gap-6 items-center">
                    <h2 className='text-2xl font-semibold'>Total cost: ${totalCost.toFixed(2)}</h2>
                    <button
                        onClick={() => sortByPrice('price')} className="flex items-center gap-2 font-semibold rounded-full px-12 py-3 border-2 border-[#9538E2] text-[#9538E2] hover:bg-[#9538E2] transition-all hover:text-white">
                        Sort by Price
                        <LiaUtensilsSolid></LiaUtensilsSolid>
                    </button>
                    <button
                        className="font-semibold rounded-full px-12 py-3 border-2 border-[#9538E2] text-white bg-[#9538E2] transition-all  hover:text-white"
                    >Purchase

                    </button>
                </div>
            </div>
            <div className="grid grid-cols-1 gap-6 mt-6">
                {
                    carts?.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
                }
            </div>
        </div>
    );
};

export default Carts;