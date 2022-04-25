import React from "react";
import ProgressBar from "bootstrap-progress-bar";
import "../css/Overall.css"
import "../css/RatingOverall.css"

const BoxRatingProgress = () => {
    return(
    
            <div>test
                <div className="rating_progress">
                    <ProgressBar className="five_star" width="80%"/>
                    <ProgressBar className="four_star" width="60%" />
                    <ProgressBar className="three_star" width="80%"/>
                    <ProgressBar className="two_star" width="60%" />
                    <ProgressBar className="one_star" width="80%"/>
                    
                    
                </div>              
            </div>
            
    )     
}

export default BoxRatingProgress