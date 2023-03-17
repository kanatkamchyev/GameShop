import React from 'react'
import Button from '../button/button'
import './game-buy.css'
import { useDispatch, useSelector} from 'react-redux'
import { deleteItemFromCart, setItemInCart } from '../../redux/cart/reducer'


const GameBuy = ({ game }) => {
  const dispatch = useDispatch()
  const items =  useSelector(state => state.cart.itemsInCart)
 const isItemCart = items.some(item => item.id === game.id)


  const handleClick = (e) => {
    e.stopPropagation();
    if(isItemCart) {
      dispatch(deleteItemFromCart(game.id))
    }else{
      dispatch(setItemInCart(game))
    }
  }
  return (
    <div className='game-buy'>
            <span className='game-buy__total-price'>{ game.price } руб.</span>
            <Button
            type='primary'
            onClick ={ handleClick }>
            { isItemCart ? 'Убрать из Корзины': 'В корзину'}
            </Button>
    </div>
  )
}

export default GameBuy
