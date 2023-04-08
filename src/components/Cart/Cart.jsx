import React from 'react';
import Tshirt from '../Tshirt/Tshirt';

const Cart = ({cart, handleRemoveFromCart}) => {
    let message;
    if(cart.length === 0){
        message = <p>Please add some products.</p>
    }
    return (
        <div>
            <h2>Order Summary: {cart.length}</h2>
            {message}
           {
             cart.map(tshirt => <p key={tshirt._id}>Name: {tshirt.name}
            <button
              onClick={ () => handleRemoveFromCart(tshirt._id)}
            >X</button>
            </p>)
           }
        </div>
    );
};

export default Cart;