import React, { useEffect, useState } from 'react';
import Activities from '../Activities/Activities';
import Cart from '../Cart/Cart';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [cart , setCart] = useState([])

    useEffect( () =>{
        fetch('activity.json')
        // fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
       
    },[]);

    const handleAddToCart = (product) =>{
        console.log(product);
        const newCart =[...cart,product];
        setCart(newCart)
    }
    return (
        <div>
          <h3 className="text-primary text-center ">Select Your Training</h3>
          <div className="exercise-container">
            <div className='excercise-items'>
            {
               products.map(product => <Activities product={product}
                 handleAddToCart={handleAddToCart} 
                 key ={product.id}></Activities>)
           }
            </div>
            <div>
            <div className="cart-container">
               
              <Cart cart ={cart}  ></Cart>
            </div>
            </div>
          </div>
        </div>
    );
};

export default Home;