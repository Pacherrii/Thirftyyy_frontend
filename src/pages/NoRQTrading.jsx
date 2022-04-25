import React from "react";
import { Link } from "react-router-dom";
import "../css/YourTradingBox.css"
import NavBar from '../components/navbar.jsx'
import sorry from '../pics/sorry 1.svg'

const NoRQTrading = () => {
    return(
        <div>
            <NavBar/>
            <main className="page-main"> 
                <div className="content_trading">      
                    <div className="title_content">
                            Trading Request
                    </div>
                    <div className="havenoRQ">
                        <img src={sorry} width="270" height="270" className="sorry_icon"></img>
                        <div className="saySORRY">
                            ขออภัย , ตอนนี้คุณไม่มีคำขอแลกเปลี่ยนสินค้าแล้ว
                        </div>
                    </div>
                </div>
            </main>
            
        </div>
    )
}

export default NoRQTrading