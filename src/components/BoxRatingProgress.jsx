import React from "react";
import Progressbar from '../components/ProgressBar.jsx';
import "../css/Overall.css"
import "../css/RatingOverall.css"
import five_star from "../pics/5stars.svg"
import four_star from "../pics/4stars.svg"
import three_star from "../pics/3stars.svg"
import two_star from "../pics/2stars.svg"
import one_star from "../pics/1star.svg"

const BoxRatingProgress = () => {
    return(
    
            <div className="box__rating__store">
                <div className="rating_progress">
                    <div className="rating__star">
                        <img src={five_star} width="150px" height="30px"></img>
                        <div className="progress_of_rating">
                            <Progressbar bgcolor="#52AD52" progress='90'/>
                        </div>
                    </div>
                    <div className="rating__star">
                        <img src={four_star} width="150px" height="30px"></img>
                        <div className="progress_of_rating">
                            <Progressbar bgcolor="#9CCE21" progress='60' />
                        </div>
                    </div>
                    <div className="rating__star">
                        <img src={three_star} width="150px" height="30px"></img>
                        <div className="progress_of_rating">
                            <Progressbar bgcolor="#F7EF42" progress='50' />
                        </div>
                    </div>
                    <div className="rating__star">
                        <img src={two_star} width="150px" height="30px"></img>
                        <div className="progress_of_rating">
                            <Progressbar bgcolor="#F7A529" progress='85'/>
                        </div>
                    </div>
                    <div className="rating__star">
                        <img src={one_star} width="150px" height="30px"></img>
                        <div className="progress_of_rating">
                            <Progressbar bgcolor="#F24A26" progress='95'/>
                        </div>
                    </div>
                    <div className="box_mean_rating">
                        <div className="meanRating_txt">
                            <br/>Overall Rating 
                        </div>
                        <div className="meanRating_mean">
                            <br/>4.8
                        </div>
                    </div> 

                
                </div>             
            </div>
            
            
    )     
}

export default BoxRatingProgress