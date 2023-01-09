
import { GET_BREED, GET_NAMES, SET_SEARCH_BREED } from "../constants/searchConstants";

export const searchReducer = (state = {}, action) => {
	switch (action.type) {
		case SET_SEARCH_BREED:
			return state;
		case GET_NAMES:
			return {
				...state,
				breeds: action.payload,
			}
		case GET_BREED:
			return {
				...state,
				breed:action.payload
			}
		default:
			return state;
	}
};

export const getNames=(state)=>state? state.search? state.search.breeds:null:null; 
export const getBreedDatas=(state)=>state? state.search? state.search.breed? state.search.breed.breed:null:null:null;
export const getBreedImages=(state)=>state? state.search? state.search.breed? state.search.breed.images:null:null:null;
