import React from "react";
import { Link } from "react-router-dom";
//import BoxOverall from "../components/BoxOverall.jsx";
import BoxGoodsOverall from "../components/BoxGoodsOverall.jsx"
import BoxAuctionOverall from "../components/BoxAuctionOverall.jsx"
import BoxTradeOverall from "../components/BoxTradeOverall.jsx"
import ModalGiveRating from "../components/ModalGiveRating.jsx"
import NavBar from '../components/navbar.jsx';
import "../css/Overall.css"
import userimg from "../pics/imgtest.jpg"
import share from "../pics/paper-plane.svg"
import giverating from "../pics/rating-star.svg"
import Rectangle_title from "../pics/Rectangle_title.svg"

const Overall = () => {
    const [show, setShow] = React.useState(false);
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
                            <div className="profile_txt">
                                <p>Romram Store</p>
                                <p>Overall Rating : 4.8</p>
                                <div className="Overall_btn_down">
                                    <button>
                                        <img src={share} width="30" height="30"></img>
                                    </button>
                                    <button as="input" type="button" className="give_rating" onClick={() => setShow(true)} >
                                        <img src={giverating} width="30" height="30"></img>
                                    </button>
                                    <ModalGiveRating show = {show}
                                    onHide = {() => setShow(false)}/>
                                </div>

                            </div>
                    </div>
                </div>
            
            <h5> Goods : </h5>
                <BoxGoodsOverall/>
            <h5> Auction : </h5>
                <BoxAuctionOverall/>
            <h5> Trade : </h5>
                <BoxTradeOverall/>
            </div>
            <Link to='/'>
                <botton>
                    Home
                </botton>
            </Link>
            <footer></footer>
        </div>
    )
}

export default Overall