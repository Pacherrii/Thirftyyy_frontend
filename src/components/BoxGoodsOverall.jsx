import React from "react";
import { Card, Col, Row } from "react-bootstrap";
import "../css/OverallBox.css"
import User from "../pics/imgtest.jpg";

const BoxGoodsOverall = () => {
    return(
        <Row xs={1} md={2}  lg={4} >
            {Array.from({ length: 3 }).map((_, idx) => (
                <Col>
                    <Card.Link href="/goodsdetail">
                        <Card className="card__good">
                            <Card.Img variant="top" src={User} className="user__img" />
                            <Card.Body>
                                <div>
                                    
                                        <Card.Title><div className="card__title"> สมุดภาพน้องรอม </div></Card.Title>
                                        <Card.Text>
                                            <div className="card__text">
                                                99999999 THB
                                            </div>
                                        </Card.Text>
                                   
                                </div>
                            </Card.Body>
                        </Card>
                    </Card.Link>
                </Col>
            ))}
        </Row>

    )
}

export default BoxGoodsOverall
