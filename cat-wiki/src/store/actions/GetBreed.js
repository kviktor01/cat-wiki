import axios from "axios";

import { GET_BREED } from "../constants/searchConstants";

export const GetBreed = (id) => async (dispatch) => {
	const breed = (await axios.post("https://cat-wiki-s67l.onrender.com/breeds/get_breed", { id })).data;
	
	dispatch({ type: GET_BREED, payload: breed });
};

