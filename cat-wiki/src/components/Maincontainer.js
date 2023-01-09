import React from 'react'
import FavouriteBreeds from './FavouriteBreeds'
import Mainheader from './Mainheader'

export default function Maincontainer() {
  return (
    <div className="main-container">
        <Mainheader></Mainheader>
        <FavouriteBreeds></FavouriteBreeds>
    </div>
  )
}
