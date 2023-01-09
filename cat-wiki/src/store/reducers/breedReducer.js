import {
	GET_CAT_BREEDS,
	GET_FAVOURITE_BREEDS,
} from "../constants/catContstants";

export const breedReducer = (state = {}, action) => {
	switch (action.type) {
		case GET_CAT_BREEDS:
			return state;
		case GET_FAVOURITE_BREEDS:
			return { ...state, favourites: action.payload };
		default:
			return state;
	}
};


export const getFavourites=(state)=> state? state.breeds? state.breeds.favourites: null:null; 