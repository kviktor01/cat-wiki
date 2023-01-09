import React from 'react'

export default function BreedProperty( {propName,value}) {
  return (
    <div className="breed-property">
        <span>{propName}:</span>
        {value}
    </div>
  )
}
