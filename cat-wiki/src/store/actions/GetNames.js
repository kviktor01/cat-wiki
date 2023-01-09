import axios from "axios";

import { GET_NAMES } from "../constants/searchConstants";

export const GetNames = (text) => async (dispatch) => {
	const breeds = (await axios.post("http://127.0.0.1:5000/breeds/get_names", {text})).data;
	
	dispatch({ type: GET_NAMES, payload: breeds });
};
