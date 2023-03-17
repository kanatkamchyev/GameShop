import React from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { setCurrentGame } from '../../redux/game/reducer'
import GameBuy from '../game-buy/game-buy'
import GameCover from '../game-cover/game-cover'
import GameGenres from '../GameGenres/game-genres'
import './game-item.css'

const GameItem = ({game}) => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
const handleClick = () =>{
    dispatch(setCurrentGame(game))
    navigate(`/app/${game.title}`)
}

  return (
    <div className='game-item' onClick={handleClick}>
      <GameCover image= { game.image }/>
      <div className="game-item__details">
      <span className='game-item__title'>{game.title}</span>
      <div className="game-item__genres">
        {
          game.genres.map((genre) => <GameGenres genre ={genre} key={genre}/>)
        }
      </div>
      <div className="game-item__buy">
         <GameBuy game ={game}/>
      </div>
    
        </div>
    </div>
  )
}

export default GameItem;
