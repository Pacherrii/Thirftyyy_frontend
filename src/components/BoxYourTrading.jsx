import React, { useState } from "react"
import "../css/YourTrading.css"
import ToggleYourTrading from "./ToggleYourTrading"

const BoxYourTrading = (props) => {
    const [show, setShow] = useState(false)
    return (
        <div className="contain__box">
            <div className="box__btn mt-4">
                <button className="btn__name" onClick={() => setShow(!show)}>S. {props.name}</button>
            </div>
            <div>
                {show ?
                    <ToggleYourTrading
                        name = {props.name}
                        detail = {props.detail}
                    /> : null
                }
            </div>
        </div>
    )
}

export default BoxYourTrading