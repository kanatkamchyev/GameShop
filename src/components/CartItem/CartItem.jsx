import React from 'react'
import './CartItem.css'
import {AiFillDelete} from 'react-icons/ai'
import { useDispatch } from 'react-redux'
import { deleteItemFromCart } from '../../redux/cart/reducer'


const CartItem = ({
  game,
    title,
    price,
    id
}) => {

const dispatch = useDispatch()

const handleClick = () => {
  dispatch(deleteItemFromCart(game.id))
}

  return (
    <div className='cart-item'>
      <span>{title}</span>
      <div className="cart-item__price">
        <span>{price}руб.</span>
      </div>
    <span><AiFillDelete onClick={handleClick}/></span>
    </div>
  )
}

export default CartItem
