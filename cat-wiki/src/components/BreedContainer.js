import React from 'react'

export default function BreedContainer({breed,index,onClick}) {
  return (
    <div onClick={()=>onClick(breed.id)} className="breed-container">
        <img className="square-image" src={breed.image.url} alt=""/>
        <div>
            <h2>{index+1 + "."} {breed.name}</h2>
            <p>{breed.description}</p>
        </div>
    </div>
  )
}
