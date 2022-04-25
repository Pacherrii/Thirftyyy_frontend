import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import { Link } from "react-router-dom"
import "../css/YourTradingModal.css"
import successIcon from "../pics/success.svg"
import exit from "../pics/exit-icon.svg"

const ModalSuccessTrading = (props) => {
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
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>

                <div className="icon_show">
                    <img src={successIcon} width="150" height="150"></img>
                </div>

                <div className="txt_success">
                    แลกสินค้าเรียบร้อยแล้ว !
                </div>
                
            </Modal.Body>
        </Modal>
    )
}

export default ModalSuccessTrading