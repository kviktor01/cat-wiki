import axios from "axios";
import { GET_FAVOURITE_BREEDS } from "../constants/catContstants";

export const GetFavouriteBreeds = (limit) => async (dispatch) => {
	const breeds = (await axios.post("https://cat-wiki-s67l.onrender.com/breeds/most_search", { limit: limit })).data;
	
	dispatch({ type: GET_FAVOURITE_BREEDS, payload: breeds });
};

