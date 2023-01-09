import axios from "axios";

import { GET_NAMES } from "../constants/searchConstants";

export const GetNames = (text) => async (dispatch) => {
	const breeds = (await axios.post("https://cat-wiki-s67l.onrender.com/breeds/get_names", {text})).data;
	
	dispatch({ type: GET_NAMES, payload: breeds });
};
