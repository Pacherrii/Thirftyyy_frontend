import React, { useState } from "react"
import "../css/YourTrading.css"
import sayyes from '../pics/yes-button.svg'
import sayno from '../pics/no-button.svg'
import ModalYourTrading from "./ModalYourTrading";
import ModalRejectTrading from "./ModalRejectTrading";

let picCard = [
    { src: '../img/jeno_cutie.jpg', title: 'img1' },
    { src: '../img/jeno_confuse.png', title: 'img2' },
    { src: '../img/rom_mask.png', title: 'img3' },
    { src: '../img/imgtest.jpg', title: 'img4' },
    { src: '../img/front_card.jpg', title: 'img5' },
];

let userCard = [
    { src: '../img/jeno_cutie.jpg', title: 'img1' }
]

const ToggleYourTrading = (props) => {
    const [modalShow, setModalShow] = useState(false);
    const [show, setShow] = useState(false);
    const [selectedImg, setSelectedImg] = useState(picCard[0].src);
    const [current, setCurrent] = useState(0);
    const length = picCard.length;

    const nextSlide = () => {
        setCurrent(current === length - 1 ? 0 : current + 1)
    }
    const prevSlide = () => {
        setCurrent(current === 0 ? length - 1 : current - 1)
    }

    if (!Array.isArray(picCard) || picCard.length <= 0) {
        return null;
    }
    console.log(current)
    return (
        <div className="toggle__box">
            <div className="box__cardtrade">
                <div className="box__pictrade">
                    <div className="img__cardtrade">
                        <img src={selectedImg} alt="#selected" className="selected" />
                    </div>
                    <div className="line__pictrade"></div>
                    <div className="thumbs__yourtrade">
                        <section className="slider">
                            <i class="fi fi-rr-angle-up" onClick={prevSlide} ></i>
                            <i class="fi fi-rr-angle-down" onClick={nextSlide}></i>
                            {picCard.map((img, index) => {
                                return (
                                    <div key={index}>
                                        {index === current && (
                                            <img
                                                src={img.src}
                                                title={img.title}
                                                key={index}
                                                className="img-thumbstrade"
                                                style={{ border: selectedImg === img.src ? "4px solid #966DE8" : "" }}
                                                onClick={() => setSelectedImg(img.src)}
                                            />
                                        )}
                                    </div>
                                )


                            })}
                        </section>
                    </div>
                </div>
                <div className="box__user">
                    <div className="user__circle">
                        {userCard.map((img) => (
                            <img
                                src={img.src}
                                alt={img.title}
                                className="usertrade__img"
                            />
                        ))}

                    </div>
                    <div className="user__text">{props.name}</div>
                </div>
                <div className="box__carddetail">
                    <div className="text__carddetail">{props.detail}</div>
                </div>
                
            </div>
            <div className="mt-4">
                
                    <div className="confirmBOX">
                        
                            <button as="input" type="button" className="Yes_icon" onClick={() => setModalShow(true)}>
                                <img src={sayyes} width="105" height="95"></img>
                            </button>
                            <ModalYourTrading show = {modalShow}
                            onHide = {() => setModalShow(false)} restorFocus={true}/>
                           
                        
                            <button as="input" type="button" className="No_icon" onClick={() => setShow(true)}>
                                    <img src={sayno} width="105" height="95"></img>
                            </button>
                            <ModalRejectTrading show = {show}
                            onHide = {() => setShow(false)}/>
                            
                    </div>
                
            </div>
        </div>
    )
}


export default ToggleYourTrading