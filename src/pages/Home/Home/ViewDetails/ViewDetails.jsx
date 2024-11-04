import React, { useContext, useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { ProductContext } from '../../../../provider/ProductProvider';
import ReactStars from "react-rating-stars-component";
import { FaCartPlus, FaRegHeart } from 'react-icons/fa';

const ViewDetails = () => {
    const { products } = useContext(ProductContext);
    const { id } = useParams();
    const [newProduct, setNewProduct] = useState({});

    useEffect(() => {
        const findById = products.find(pd => pd.id === parseInt(id))
        setNewProduct(findById);
    }, [id, products])

    const { product_title, image, price, description, specification, availability, rating } = newProduct || {};
    console.log('rating', rating);
    console.log('newProduct', newProduct);

    return (
        <div>
            <div className="md:flex gap-8 bg-white rounded-2xl shadow-xl p-4 md:p-8">
                <div className='md:w-1/3'>
                    <img
                        className='rounded-xl md:h-[500px] object-cover w-full'
                        src={image} alt="" />
                </div>
                <div className='md:w-2/3 mt-4 md:mt-0'>
                    <div className='space-y-4'>
                        <h1 className="text-3xl font-semibold">{product_title}</h1>
                        <p className="text-xl font-semibold">Price: ${price}</p>
                        <div>
                            {
                                availability ? <button className='px-4 py-1 bg-[#84ff571a] rounded-full font-medium border-2 text-green-700'>In Stock</button>
                                    : <button className='px-4 py-1 bg-[#84ff571a] rounded-full font-medium border-2 text-green-700'>Out Stock</button>
                            }
                        </div>
                        <p className='text-gray-500 text-lg'>{description}</p>
                        <div>
                            <h6 className='font-bold text-lg'>Specification:</h6>
                            <ol className='list-decimal ml-4 mt-2 text-gray-500 text-lg'>
                                {
                                    specification?.map((specific, idx) => <li key={idx}>{specific}</li>)
                                }
                            </ol>
                        </div>
                        <div>
                            <div className='flex items-center gap-2'>
                                <h6 className='font-bold text-lg'>Rating</h6>
                                <div className='h-4 w-4 bg-black'></div>
                            </div>
                            <ReactStars
                                count={5}
                                value={rating}
                                size={28}
                                activeColor="purple"
                                color={'green'}
                            />
                        </div>
                        <div className='flex gap-4 items-center'>
                            <Link className="bg-[#9538E2] border-2 transition-all text-white font-semibold rounded-full px-6 py-2 flex items-center gap-2">
                                <button >Add To Cart</button>
                                <FaCartPlus></FaCartPlus>
                            </Link>
                            <button className='p-2 border-2 rounded-full hover:bg-[#9538E2] hover:text-white transition-all'> <FaRegHeart className="h-5 w-5"></FaRegHeart></button>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ViewDetails;