import React, { useContext } from 'react';
import { ProductContext } from '../../../../provider/ProductProvider';
import Cart from '../../Carts/Cart';

const Lists = () => {
    const { lists } = useContext(ProductContext);
    console.log(lists);
    return (
        <div className="grid grid-cols-1 gap-6">
            cart
            {
                lists.map(cart => <Cart key={cart.id} cart={cart}></Cart>)
            }
        </div>
    );
};

export default Lists;