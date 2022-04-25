import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../css/OverallBox.css"
import { Link } from "react-router-dom";
import User from "../pics/imgtest.jpg";
import Clock from "../pics/hourglass.svg";

const BoxAuctionOverall = () => {
    return(
        <Row xs={1} md={3} lg={4} >
            {Array.from({ length: 3 }).map((_, idx) => (
                <Col className="mb-3">
                    <div className="container__box__bid">
                        <Card className="card__auction">
                            <Card.Img variant="top" src={User} className="auction__img" />
                            <Card.Body>
                                <Card.Text>
                                    <div className="container__text__bid">
                                        <img src={Clock} className="img__clock " alt="#clock" />
                                        <div className="text__time">2 hr 20 min 37 sec</div>
                                    </div>
                                </Card.Text>
                            </Card.Body>

                        </Card>
                        <div className="container__bid mb-2">
                            <div className="bid__title">Bid start 500 THB</div>
                            <div className="bid__detail">bid increment 100 THB</div>
                        </div>
                        <div className="container-btn-bid">
                            <button as="input" type="button" className="btn-bid">เสนอราคา</button>
                            <Link to='/auctiondetail' ><button as="input" type="button" className="btn-bid-detail">รายละเอียด</button></Link>
                            
                        </div>
                    </div>
                </Col>
            ))}
        </Row>

    )
}

export default BoxAuctionOverall