import React from "react";
import { Link } from "react-router-dom";
import NavBar from '../components/navbar.jsx'
import BoxYourTrading from '../components/BoxYourTrading.jsx'
import "../css/YourTrading.css"
//import BoxYourTrading from "../components/BoxYourTrading.jsx";


const YourTrading = () => {
    return (
        <div>
            <NavBar/>
            <div className="ms-5">
                <div className="text__mytrading">Trading Request</div>
                <div>
                    <BoxYourTrading
                        name="Grace kiminoto rikorimat"
                        detail="การ์ดไม่มีอะไรเสียหายเลยค่ะจะมีก็แต่ใจพี่ที่มันเสียหาย เพราะความน่ารักของน้องเจโน่"
                    />
                    <BoxYourTrading 
                    name = "Cherry kiminoto rikorimat"
                    detail = "การ์ดไม่มีอะไรเสียหายเลยค่ะ จะมีก็แต่ใจพี่ที่มัน เสียหายเพราะความน่ารักของน้องเจโน่"
                />
                </div>
                
            </div>
            <footer></footer>
        </div>
    )
}

export default YourTrading