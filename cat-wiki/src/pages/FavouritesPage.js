import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import BreedContainer from '../components/BreedContainer';
import { GetBreed } from '../store/actions/GetBreed';
import { GetFavouriteBreeds } from '../store/actions/GetFavouriteBreeds';
import { getFavourites } from '../store/reducers/breedReducer';

export default function FavouritesPage() {
  const navigate=useNavigate();
  const onBreedClick=(id)=>{
    dispatch(GetBreed(id));
    navigate("/breed");
  }
    const dispatch = useDispatch();
	useEffect(() => {
		dispatch(GetFavouriteBreeds(10));
	}, []);
    const favourites = useSelector(getFavourites);
  return (
    <div>
      <h1>Top 10 most searched breeds</h1>
      {favourites? favourites.map((favourite,index)=>{
        return <BreedContainer breed={favourite} index={index} onClick={onBreedClick}/>
      }):"Töltés..."}
    </div>
  )
}
