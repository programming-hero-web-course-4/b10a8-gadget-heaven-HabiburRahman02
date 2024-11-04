import { Link } from "react-router-dom";

const Product = ({ product }) => {
    const { id, product_title, image, price } = product

    const handleViewDetails = product => {

    }
    return (
        <div className="bg-white rounded-xl shadow-xl p-6 space-y-4">
            <img className="w-full h-[180px] object-cover rounded-lg" src={image} alt="" />
            <h6 className="font-bold text-lg">{product_title}</h6>
            <p>Price: ${price}</p>
            <div>
                <Link to={`/viewDetails/${id}`}>
                    <button className="border-2 hover:bg-[#9538E2] hover:text-white font-semibold rounded-full px-6 py-2">View Details</button>
                </Link>
            </div>
        </div>
    );
};

export default Product;