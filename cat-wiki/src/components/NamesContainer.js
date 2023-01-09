import React from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router';
import { GetBreed } from '../store/actions/GetBreed';
import { getNames } from '../store/reducers/searchReducer';

export default function NamesContainer() {
    const names=useSelector(getNames);
    const dispatch=useDispatch();
    const navigate=useNavigate();
    const onBreedClick=(id)=>{
      dispatch(GetBreed(id));
      navigate("/breed");
    }
  return (
    <div className="searching-container">
        <div className="searching">
				{names?names.map((breed)=><span onClick={()=>onBreedClick(breed.breed_id)} style={{display: 'block'}}>{breed.breed_name}</span>):""}
        </div>
	</div>
  )
}
