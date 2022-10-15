import React from 'react'
import CartBlock from '../cart-block/cart-block'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <div className="header__left">GameStore</div>
      <div className="header__right">
        <CartBlock />
      </div>
    </div>
  )
}

export default Header
