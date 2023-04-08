import React from 'react';
import './Tshirt.css';

const Tshirt = ({tshirt, handleAddToCart}) => {
    const {picture, name, price} = tshirt;
    return (
        <div className='tshirt-container'>
            <img src={picture} alt="" />
            <h3>Name: {name}</h3>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(tshirt)} className='btn-buy'>Buy Now</button>
        </div>
    );
};

export default Tshirt;