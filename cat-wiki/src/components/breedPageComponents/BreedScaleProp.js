import React from "react";
import cn from "classnames";
export default function BreedScaleProp({ propName, value }) {
	return (
		<div className="breed-property">
			<span>{propName}:</span>
             
			<div className="bars-container">
				{[...Array(5)].map((value2,index) => {
                    return <span className={cn("bar", { "full": (index + 1 <= value) })}></span>
                }
				)}
			</div>
            
		</div>
	);
}
