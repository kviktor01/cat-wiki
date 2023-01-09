import React, { useEffect } from "react";
import { getFavourites } from "../store/reducers/breedReducer";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
export default function FavouriteBreeds() {
	const favourites = useSelector(getFavourites);
	
	return (
		<div className="favourite-container">
			<span>Most searched breeds</span>
			<hr/>
			<div className="favourite-header">
				<div><h1>66+ Breeds For you to discover</h1></div>
				<div><Link to="/mostSearched">See more</Link></div>
			</div>
			<div className="favourites">
				{favourites
					? favourites.map((favourite) => {
							return (
								<figure key={favourite.name}>
									<img className="square-image" src={favourite.image.url} alt={favourite.name+" image"}/>
									<figcaption>{favourite.name}</figcaption>
								</figure>
							);
					  })
					: ""}
			</div>
		</div>
	);
}
