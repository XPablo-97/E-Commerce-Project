import React from 'react';
import "./CartMessage.scss";
import { correct } from "../../utils/images";

const CartMessage = () => {
  return (
    <div className='cart-message text-center'>
      <div className='cart-message-icon'>
        <img src = {correct} alt = "" />
      </div>
      <h6 className='text-white fs-14 fw-5'>Ha sido agregado a tu carrito! </h6>
    </div>
  )
}

export default CartMessage