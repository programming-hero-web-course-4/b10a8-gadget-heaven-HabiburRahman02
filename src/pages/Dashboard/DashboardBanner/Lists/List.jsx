import { RxCrossCircled } from "react-icons/rx";
import { Link } from "react-router-dom";

const List = ({ list }) => {
    const { image, product_title, description, price } = list
    return (
        <div className="border mx-auto md:w-2/3">
            <div className="md:flex justify-between gap-6 bg-white p-6 shadow-xl w-full rounded-xl">
                <div className="md:flex gap-6">
                    <img
                        className="md:w-[200px] w-full md:h-full mb-4 md:mb-0 h-[200px] object-cover rounded-xl"
                        src={image} alt="" />
                    <div className="space-y-4">
                        <h2 className="text-2xl font-semibold">{product_title}</h2>
                        <p className="text-gray-500">Description: {description}</p>
                        <p className="text-lg font-semibold">Price: ${price}</p>
                        <Link to='/'>
                            <button className="bg-[#9538E2] border-2 transition-all text-white font-semibold rounded-full px-6 py-2 flex items-center gap-2 mt-4">Add To Cart</button>
                        </Link>
                    </div>
                </div>
                <div>
                    <button>
                        <RxCrossCircled className="text-2xl text-red-500"></RxCrossCircled>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default List;