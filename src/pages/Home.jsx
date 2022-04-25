import React from "react";
import { Link } from "react-router-dom"
import NavBar from '../components/navbar.jsx'

const Home = () => {
    return (
        <div>
            <NavBar/>
            <h1> ไม่ได้ใช้หน้านี้ 
                ทำเพื่อลอง link เฉยๆ </h1>
            <Link to='/contact'>
                <botton>
                    contact
                </botton>
            </Link>
            <h2> go see overall </h2>
            <Link to='/Overall'>
                <botton>
                    Overall
                </botton>
            </Link>
            <h2> yourtrading </h2>
            <Link to='/Yourtrading'>
                <botton>
                    Trade
                </botton>
            </Link>
            <h2> yourtrading ไม่มี </h2>
            <Link to='/NoRQTrading'>
                <botton>
                    Trade
                </botton>
            </Link>
        </div>
    )
}

export default Home