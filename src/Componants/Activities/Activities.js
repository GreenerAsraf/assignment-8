import React from 'react';
import'./Activities.css';
const Activities = (props) => {
    const {handleAddToCart,product} = props;
    const {img,name,seller,price,ratings} = product;
    return (
    
    <div className='product'>
        <img src={img} alt="" />
        <div className="product-info">
        <p className='product-name'> {name}</p>
        <p> <small>Seller:{seller}</small></p>
        <p><small>Price: ${price}</small></p>
        <p><small>Ratings:{ratings} stars</small></p>
        </div>
            <button onClick={()=>handleAddToCart(product)} className='btn-cart'>
                <p>Add to Cart</p>
            </button>
    </div>
      
    );
};

export default Activities;