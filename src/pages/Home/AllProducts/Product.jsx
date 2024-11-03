
const Product = ({ product }) => {
    const { product_title, image, price } = product
    return (
        <div className="bg-white rounded-xl shadow-xl p-6 space-y-4">
            <img className="w-full h-[180px] object-cover rounded-lg" src={image} alt="" />
            <h6 className="font-bold text-lg">{product_title}</h6>
            <p>Price: ${price}</p>
            <button className="border-2 hover:bg-[#9538E2] hover:text-white font-semibold rounded-full px-6 py-2">View Details</button>
        </div>
    );
};

export default Product;