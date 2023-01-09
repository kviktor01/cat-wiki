import axios from "axios";

import { GET_BREED } from "../constants/searchConstants";

export const GetBreed = (id) => async (dispatch) => {
	const breed = (await axios.post("http://127.0.0.1:5000/breeds/get_breed", { id })).data;
	
	dispatch({ type: GET_BREED, payload: breed });
};

