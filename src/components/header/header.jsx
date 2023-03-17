import React from 'react'
import { Link } from 'react-router-dom'
import CartBlock from '../cart-block/cart-block'
import './header.css'

const Header = () => {
  return (
    <div className='header'>
      <Link to='/'>
      <div className="header__left">GameStore</div>
      
      </Link>
      <div className="header__right">
        <CartBlock />
      </div>
    </div>
  )
}

export default Header
