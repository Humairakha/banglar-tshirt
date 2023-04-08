import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';
import Cart from '../Cart/Cart';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Home = () => {
   const tshirts = useLoaderData();
   const [cart, setCart] = useState([]);

   const handleAddToCart = tshirt => {
    const exists = cart.find(ts => ts._id === tshirt._id);
    if(exists){
       toast('Already Added Product')
    }
    else{
        const newCart = [...cart, tshirt];
        setCart(newCart);
    }
   }

   const handleRemoveFromCart = id => {
    const remaining = cart.filter(ts => ts._id !== id);
    setCart(remaining);
   }

    return (
        <div className='shop-container'>
           <div className="tshirts-container">
           {
                tshirts.map(tshirt => <Tshirt
                 key={tshirt._id}
                 tshirt={tshirt}
                 handleAddToCart={handleAddToCart}
                ></Tshirt>)
            }
           </div>
           
           <div className="cart-container">
              <Cart 
              cart={cart}
              handleRemoveFromCart={handleRemoveFromCart}
              ></Cart>
           </div>
           <ToastContainer />
        </div>
    );
};

export default Home;