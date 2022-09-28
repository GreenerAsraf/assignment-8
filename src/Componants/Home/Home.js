import React, { useEffect, useState } from 'react';
import './Home.css';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [cart , setCart] = useState([])

    useEffect( () =>{
        // fetch('../fakeData/products.json')
        fetch('https://raw.githubusercontent.com/ProgrammingHero1/ema-john-resources/main/fakeData/products.json')
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
            <div className='excercise-container'>
                <h2>four part</h2>
            </div>
            <div>
            <div className="cart-container">
                <h3>This is cart</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatem, blanditiis. Ullam ea nulla ab incidunt delectus qui veniam, et repudiandae exercitationem, placeat omnis laudantium blanditiis. Expedita ullam repudiandae quidem adipisci!</p>
              {/* <Cart cart ={cart}  ></Cart> */}
            </div>
            </div>
          </div>
        </div>
    );
};

export default Home;