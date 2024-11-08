import React, { useContext } from 'react';
import { ProductContext } from '../../../../provider/ProductProvider';
import List from './List';

const Lists = () => {
    const { lists } = useContext(ProductContext);
    // console.log(lists);
    return (
        <div className="max-w-[1400px] mx-auto mt-12">
            <h2 className='text-2xl font-semibold'>Wishlist</h2>
            <div className='grid grid-cols-1 gap-6 mt-6'>
                {
                    lists.map(list => <List key={list.id} list={list} ></List>)
                }
            </div>
        </div>
    );
};

export default Lists;