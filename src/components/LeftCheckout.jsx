import React from 'react'
import '../styles/checkout.css'

const LeftCheckout = () => {
  return (
    <div className='leftCheckout-container'>
        <div className="hero-container">
            <h4>Guest Checkout</h4>
            <img src="icons/arrow-down.svg" alt="more" />
        </div>

        <div className="checkout-details-container">
            <div className="checkout-country">
                <h4>Shipping Country</h4>
                <input type="text" name="" id="" />
            </div>
        </div>
    </div>
  )
}

export default LeftCheckout