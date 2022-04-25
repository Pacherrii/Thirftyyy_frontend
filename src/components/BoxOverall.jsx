import React from "react";
import PhotoTest from "../pics/mail-icon.jpg"
import { Card, Col, Row } from "react-bootstrap";

const BoxOverall = (props) => {
    return (
        <Row xs={1} md={2} lg={3}>
            {Array.from({length:3}).map((_, idx) => (
                <Col>
                    <Card className="review__goods">
                        <Card.Body>
                            <div className="circle">
                                <Card.Title>
                                    <div className="card_title_review">
                                        Username Acc
                                    </div>
                                </Card.Title>
                                <Card.Text>
                                    <div className="container__detail card_text_review">
                                        <div> รีวิว 1 </div>
                                    </div>
                                </Card.Text>
                                <div className="container__img">
                                    <Card.Img variant="top" src={PhotoTest} className="good__img" />
                                </div>
                            </div>
                        </Card.Body>
                    </Card>
                    <div className="container__btn">
                        <button as="input" type="button" href="#" className="btn-detail">รายละเอียด</button>
                    </div>
                </Col>
            ))}
        </Row>
    )
}

export default BoxOverall