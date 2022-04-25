import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../css/OverallBox.css"
import { Link } from "react-router-dom";
import forsale1 from "../pics/front_card.jpg";
import forsale2 from "../pics/back_card.jpg";


const BoxTradeOverall = (props) => {
    return(
        <Row xs={1} md={2} lg={3} >
            {Array.from({ length: 2 }).map((_, idx) => (
                <Col className="mb-3">
                    <div className="container__box__trade">
                        <Card className="card__trade">
                            <Card.Body>
                                <div className="circle"></div>
                                <Card.Title ><div className="card__title__trade"> Username Acc </div></Card.Title>
                                <Card.Text>
                                    <div className="container__detail card__text__trade">
                                        <div>สินค้าของเรา : น้องแจยอนลูกเสือ</div>
                                        <div>สินค้าของคุณ : น้องเชอร์รี่คาวาอี๊</div>
                                        <div>นัดรับสยามเอยสยามใจ</div>
                                    </div>
                                </Card.Text>
                                <div className="container__img">
                                    <Card.Img variant="top" src={forsale1} className="good__img" />
                                    <Card.Img variant="top" src={forsale2} className="good__img" />
                                </div>
                            </Card.Body>
                        </Card>
                        <Link to='/tradedetail'><button as="input" type="button" className="btn-detail">รายละเอียด</button></Link>
                    </div>
                </Col>
            ))}
        </Row>

    )
}

export default BoxTradeOverall