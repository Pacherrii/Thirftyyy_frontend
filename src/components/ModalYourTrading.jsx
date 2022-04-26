import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import { Link } from "react-router-dom"
import "../css/YourTradingModal.css"
import ModalSuccessTrading from "./ModalSuccessTrading"

const ModalYourTrading = (props) => {
    const [successShow, setsuccessShow] = useState(false);
    const handleClickUserDetail = () => {
        console.log(props)
        this.props.onHide();
        //setsuccessShow(true);
        }

    return (
        <Modal
            {...props}
            contentClassName="content__box__trade"
            backdropClassName="backdrop__box"
            aria-labelledby="contained-modal-title-vcenter"
            backdrop="static"
            keyboard={false}
            centered
        >
            <Modal.Body>
                <div className="modal_trade">
                    <div className="txt_box_trde">
                        <h4 className="submit_txt_trade">ยืนยันที่จะแลกสินค้ากับ</h4>
                        <h4 className="user_txt_trade">K. Cherry kiminoto rikorimat</h4>
                    </div>
                    <div className="button_trade">
                        <div className="button_trade">
                            <button as="input" type="button" className="btn__yes" onClick={() =>{ setsuccessShow(true);handleClickUserDetail()}} >ยืนยัน</button>
                            <ModalSuccessTrading show = {successShow}
                            onHide = {() => setsuccessShow(false)} restorFocus={true}/>
                            <button onClick={props.onHide} className="btn__no">ยกเลิก</button>
                        </div>
                    </div>
                </div>
            </Modal.Body>
        </Modal>

    )
}

export default ModalYourTrading