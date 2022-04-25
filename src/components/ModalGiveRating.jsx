import React, { useState } from "react"
import { Modal } from "react-bootstrap"
import { Link } from "react-router-dom"
import StarRating from "./StarRating"

const ModalGiveRating = (props) => {
    
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
            <div className="Rating_title">
                <div className="rating_txt">
                    Rating 
                </div>
                <div className="button_star">
                    <StarRating/>
                </div>
            </div>
            <form className="Rating_comment">
                <label> Comment <br/></label>
                <textarea type="text" name="comment" ></textarea>
            </form>
            <div className="button_send">
                <button onClick={props.onHide} className="btn__submit" >send</button>
            </div>
        </Modal.Body>

        </Modal>

        )
    }
    
    export default ModalGiveRating