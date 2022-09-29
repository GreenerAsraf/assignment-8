import React from 'react';
import'./Activities.css';
const Activities = (props) => {
    const {handleAddToCart,product} = props;
    const {img,name,time} = product;
    return (
    
    <div className='product'>
        <img src={img} alt="" />
        <div className="product-info">
        <p className='product-name'> {name}</p>
        <p>Time required: {time}s</p> 

        <button onClick={()=>handleAddToCart(product)} className='btn btn-primary '>
                <p>Add to Cart</p>
        </button>
        </div>
        
    </div>
      
    );
};

export default Activities;