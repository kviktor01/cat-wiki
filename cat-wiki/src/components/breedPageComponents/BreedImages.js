import React from 'react'
import { useSelector } from 'react-redux';
import { getBreedImages } from '../../store/reducers/searchReducer';

export default function BreedImages() {
    const images = useSelector(getBreedImages);
  return (
    <div className="image-container">
        {images && (images.map((image)=><img src={image.url} alt=""></img>))}
    </div>
  )
}
