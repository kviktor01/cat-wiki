import React from "react";
import { useSelector } from "react-redux";
import {
	getBreedDatas,
	getBreedImages,
} from "../../store/reducers/searchReducer";
import BreedProperty from "./BreedProperty";
import BreedScaleProp from "./BreedScaleProp";

export default function BreedDescription() {
	const images = useSelector(getBreedImages);
	const breedData = useSelector(getBreedDatas);
  
	return (
		<div className="breed-description-container">
			{breedData && images && (
				<>
					<div>
						<img src={images ? images[0].url : ""} alt="" />
					</div>
					<div>
						<h1>{breedData.name}</h1>
						<p>{breedData.description}</p>
						<BreedProperty
							propName={"Temperament"}
							value={breedData.temperament}
						></BreedProperty>
						<BreedProperty
							propName={"Origin"}
							value={breedData.origin}
						></BreedProperty>
						<BreedProperty
							propName={"Lifespan"}
							value={breedData.life_span + " years"}
						></BreedProperty>
						<BreedScaleProp
							propName={"Adaptability"}
							value={breedData.adaptability}
						></BreedScaleProp>
            <BreedScaleProp
							propName={"Affection Level"}
							value={breedData.affection_level}
						></BreedScaleProp>
            <BreedScaleProp
							propName={"Child Friendly"}
							value={breedData.child_friendly}
						></BreedScaleProp>
            <BreedScaleProp
							propName={"Grooming"}
							value={breedData.grooming}
						></BreedScaleProp>
            <BreedScaleProp
							propName={"Intelligence"}
							value={breedData.intelligence}
						></BreedScaleProp>
            <BreedScaleProp
							propName={"Health Issues"}
							value={breedData.health_issues}
						></BreedScaleProp>
             <BreedScaleProp
							propName={"Social Needs"}
							value={breedData.social_needs}
						></BreedScaleProp>
            <BreedScaleProp
							propName={"Stranger friendly"}
							value={breedData.stranger_friendly}
						></BreedScaleProp>
					</div>
				</>
			)}
		</div>
	);
}
