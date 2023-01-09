import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import Maincontainer from "../components/Maincontainer";
import { GetFavouriteBreeds } from "../store/actions/GetFavouriteBreeds";
import {Link} from "react-router-dom";
export default function Mainpage() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(GetFavouriteBreeds(4));
	}, []);

	return (
		<div>
			<Maincontainer></Maincontainer>
			<div className="second-container">
				<div>
					<h1>Why should you have a cat?</h1>
					<p>
						Having a cat around you can actually trigger the release of calming
						chemicals in your body which lower your stress and anxiety leves
					</p>
					<Link to="/">READ MORE </Link>
				</div>
				<div className="image-container">
					<img id="grid-item1" src="/image_2.png" alt=""/>
					<img id="grid-item2" src="/image_1.png" alt=""/>
					<img id="grid-item3" src="/image_3.png" alt=""/>
				</div>
			</div>
		</div>
	);
}
