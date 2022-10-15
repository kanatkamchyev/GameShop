import React from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import './cart-block.css'

const CartBlock = () => {
  return (
    <div className='cart-block'>
    <FiShoppingCart size={25} className = 'cart-block__icon'/>
      <span className='cart-block__total-price'>12000 руб.</span>
    </div>
  )
}

export default CartBlock
