
const Cart = ({ cart }) => {
    const { image, product_title, description, price } = cart
    return (
        <div className="border mx-auto">
            <div className="flex gap-6 bg-white p-6 shadow-xl rounded-xl">
                <img
                    className="w-[200px] h-[125px] rounded-xl"
                    src={image} alt="" />
                <div className="space-y-4">
                    <h2 className="text-2xl font-semibold">{product_title}</h2>
                    <p className="text-gray-500">Description: {description}</p>
                    <p className="text-lg font-semibold">Price: ${price}</p>
                </div>
                <div>
                    <button>Cross</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;