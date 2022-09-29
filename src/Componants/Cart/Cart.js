import React, { useState } from 'react';
import image from '../../1568834815228.jpg';

const Cart = (props) => {

    const [time, setTime] =useState(0);
    
    const cart = props.cart;
    console.log(cart);
    let total = 0;
    for(let i = 0; i< cart.length; i++){
        const excercise = cart[i];
        console.log(excercise.time);
        total = total + excercise.time;
    }

    const breakTime1 =()=>{
        const breakTimeValue = 10;
        setTime(breakTimeValue);
    }
    const breakTime2 =()=>{
        const breakTimeValue = 15;
        setTime(breakTimeValue);
    }
    const breakTime3 =()=>{
        const breakTimeValue = 20;
        setTime(breakTimeValue);
    }
    const breakTime4 =()=>{
        const breakTimeValue = 25;
        setTime(breakTimeValue);
    }
    const breakTime5 =()=>{
        const breakTimeValue = 30;
        setTime(breakTimeValue);
    }
    // const {time} =props;
    return (
        <div>
         <div className="mx-auto">
            <div class="card mb-3 " style={{maxWidth:' 540px'}}>
  <div class="row g-0">
    <div class="col-md-4">
      <img src={image} class="img-fluid rounded-start" alt="..."/>
    </div>
    <div class="col-md-8">
      <div class="card-body">
        <h5 class="card-title">Mohammed Asraf Uddin</h5>
        <p class="card-text"><small>BBA ,Chittagong University</small></p>
       
      </div>
      <div>
    
      </div>
    </div>
  </div>
</div>
        <div className="container">
        <small><span> Weight: 75kg </span>
            <span>Height: 5.6 feet </span>
            <span>29 Years</span>
        </small>
        </div>
            </div>

            <hr />
            <div>
                <h4>Add a Break</h4>
                <button onClick={breakTime1} className='btn btn-outline-info break-time'>10</button>
                <button onClick={breakTime2} className='btn btn-outline-info break-time'>15</button>
                <button onClick={breakTime3} className='btn btn-outline-info break-time'>20</button>
                <button onClick={breakTime4} className='btn btn-outline-info break-time'>25</button>
                <button onClick={breakTime5} className='btn btn-outline-info break-time'>30</button>
            </div>
            <br />
            <h4>Exercise Details</h4>
            <label htmlFor="">Excercise Time:{total}</label>
      
          <br />
            <h4 htmlFor="">Break Time: {time}</h4>
       
          <hr />


          <button className='btn btn-success'>Activity Completed</button>
         
        </div>
    );
};

export default Cart;