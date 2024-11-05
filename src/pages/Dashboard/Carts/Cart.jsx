import { useContext } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { ProductContext } from "../../../provider/ProductProvider";
const Cart = ({ cart }) => {
    const { image, product_title, description, price } = cart;
    const { carts, setCarts } = useContext(ProductContext);

    const handleDeleteCartItem = item => {
        const filterById = [...carts].filter(cart => cart.id !== item.id);
        setCarts(filterById)
        console.log(item, carts);
    }

    return (
        <div className="border mx-auto md:w-2/3">
            <div className="md:flex justify-between gap-6 bg-white p-6 shadow-xl w-full rounded-xl">
                <div className="md:flex gap-6">
                    <img
                        className="md:w-[200px] w-full md:h-[125px] mb-4 md:mb-0 h-[200px] object-cover rounded-xl"
                        src={image} alt="" />
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">{product_title}</h2>
                        <p className="text-gray-500">Description: {description}</p>
                        <p className="text-lg font-semibold">Price: ${price}</p>
                    </div>
                </div>
                <div>
                    <button
                        onClick={() => handleDeleteCartItem(cart)}
                    >
                        <RxCrossCircled className="text-2xl text-red-500"></RxCrossCircled>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Cart;