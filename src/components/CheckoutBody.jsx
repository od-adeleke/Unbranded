import React from 'react'
import LeftCheckout from './LeftCheckout'
import RightCheckout from './RightCheckout'
import '../styles/checkout.css'

const CheckoutBody = () => {
  return (
    <div>
        <h1>Payment</h1>
        <button className="btn">
            View Cart
        </button>
        <div className="checkout-payment-container">
            <LeftCheckout />
            <RightCheckout />
        </div>
    </div>
  )
}

export default CheckoutBody