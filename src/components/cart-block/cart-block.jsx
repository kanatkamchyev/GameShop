import React, { useState } from 'react'
import { FiShoppingCart } from 'react-icons/fi'
import { useSelector } from 'react-redux'
import CartMenu from '../cart-menu/cart-menu'
import ItemsInCart from '../itemsInCart/itemsInCart'
import { calcTotalPrice } from '../utils'
import './cart-block.css'

const CartBlock = () => {
  const items = useSelector(state => state.cart.itemsInCart);
  const totalPrice = calcTotalPrice(items);
  const[openCart, setOpenCart] = useState(false)

  return (
    <div className='cart-block'>
    <ItemsInCart quantity = { items.length }/>
    <FiShoppingCart size={25} className = 'cart-block__icon' onClick={() => setOpenCart(!openCart)}/>{
      totalPrice > 0 ?
     ( <span className='cart-block__total-price'>{ totalPrice } руб.</span>)
      : null}
    
    {
       openCart && <CartMenu items={ items }  onClick ={() => null}/>

    }
    </div> 
  )
}

export default CartBlock