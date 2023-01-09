import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { GetNames } from "../store/actions/GetNames";
import { getNames } from "../store/reducers/searchReducer";
import NamesContainer from "./NamesContainer";

export default function Input() {
	const dispatch = useDispatch();
	const [text, setText] = useState("");
	const onInputChange = (e) => {
		setText(e.target.value);
		dispatch(GetNames(e.target.value));
	};

	return (
		<div className="input-container">
			<input
				type="text"
				placeholder="Enter your breed"
				onChange={(e) => onInputChange(e)}
			/>
			<span>
				<BsSearch />
			</span>
			{text !== "" ? <NamesContainer></NamesContainer> : ""}
		</div>
	);
}
