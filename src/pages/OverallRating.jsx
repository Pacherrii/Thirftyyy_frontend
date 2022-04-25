import React from "react";
import { Link } from "react-router-dom";
import NavBar from '../components/navbar.jsx';
import userimg from "../pics/imgtest.jpg"
import BoxRatingProgress from "../components/BoxRatingProgress"
import Rectangle_title from "../pics/Rectangle_title.svg"
import "../css/Overall.css"
import BoxCommentRating from "../components/BoxCommentRating"

const OverallRating = () => {
    return (
        <div>
             <NavBar/>
             <div className="Overall_store">
                <div className="Overall_text">
                    <div className="Overall_top">
                        <div className="Overall_title"> 
                        <img src={Rectangle_title} width="20" height="10"></img> Store 
                        </div>
                        <div className="Overall_btn_top">
                            <Link to='/Overall'><button type="botton" className="go_overall">overall</button></Link>
                            |
                            <Link to='/Overallrating'><button type="botton" className="go_rating">rating</button></Link>
                    
                        </div>
                    </div>
                    
                    <div className="Overall_item1">
                        <div className="profile_pic">
                            <img variant="top" src={userimg} className="user_profile_pic"></img>
                        </div>
                        <BoxRatingProgress/>
                        
                    </div>
                    <hr class="style1"></hr>
                </div>
                <BoxCommentRating/>
            </div>


        
        </div>
    )
}
    
    export default OverallRating