import React from "react";
import { Link } from "react-router-dom";
import { Navbar, Nav, Container, Stack, NavDropdown } from "react-bootstrap";
import "../css/YourTradingBox.css"
import sayyes from '../pics/yes-button.svg'
import sayno from '../pics/no-button.svg'
import ModalYourTrading from "./ModalYourTrading";
import ModalRejectTrading from "./ModalRejectTrading";

const BoxYourTrading = () => {
    const [modalShow, setModalShow] = React.useState(false);
    const [show, setShow] = React.useState(false);
    return(
        <div className="grid">
            
            <aside className="page-rightbar">
                <div className="content">
                    <div className="detail_userBLOCK">
                        <div className="img_userBLOCK">
                            <div className="img_example">

                            </div>
                        </div>
                        <div className="txt_userBLOCK">
                            <div className="user_img">

                            </div>
                            <div className="user_name">
                                K. Cherry kimi
                            </div>
                            <div className="user_detail">
                            การ์ดไม่มีอะไรเสียหายเลยค่ะ 
                            จะมีก็แต่ใจพี่ที่มันเสียหาย
                            เพราะความน่ารักของน้องเจโน่
                            </div>
                        </div>
                    </div>
                </div>
            </aside>

            <main className="page-main">
                <div className="content_trading">
                    <div className="title_content">
                        Trading Request
                    </div>
                    <div className="user_rqBOX">
                        <p1>
                            K. Cherry kimi
                        </p1>
                    </div>
                    <div className="user_rqBOX">
                        <p1>
                            K. Romram Arigato
                        </p1>
                    </div>
                    <div className="user_rqBOX">
                        <p1>
                            K. Orn kkova
                        </p1>
                    </div>
                    <div className="user_rqBOX">
                        <p1>
                            K. Grace Fruity
                        </p1>
                    </div>
                    
                </div>
            </main>
            <footer className="page-footer">
                <div className="content">
                    <div className="confirmBOX">
                        
                            <button as="input" type="button" className="Yes_icon" onClick={() => setModalShow(true)}>
                                <img src={sayyes} width="105" height="95"></img>
                            </button>
                            <ModalYourTrading show = {modalShow}
                            onHide = {() => setModalShow(false)}/>
                           
                        
                            <button as="input" type="button" className="No_icon" onClick={() => setShow(true)}>
                                    <img src={sayno} width="105" height="95"></img>
                            </button>
                            <ModalRejectTrading show = {show}
                            onHide = {() => setShow(false)}/>
                            
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default BoxYourTrading