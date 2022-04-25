import React from "react";
import "../css/RatingOverall.css"
import five_star from "../pics/5stars.svg"
import four_star from "../pics/4stars.svg"
import three_star from "../pics/3stars.svg"
import two_star from "../pics/2stars.svg"
import one_star from "../pics/1star.svg"

const BoxCommentRating = () => {
    return(
        <div>
            <div className="comment_rating">
                <div className="box_AllComment">
                    <div className="box_comment">
                        <div className="circle_comment"></div>
                        <div className="text_comment">
                            <div className="User_comment">น้องเยมคนสวย</div>
                            <img className="Star_comment" src={five_star} width="150px" height="30px"></img>
                            <div className="Write_comment">การ์ดไม่มีรอยเลยค่ะ อย่างกับเพิ่งแกะออกมาจากบั้ม ++++</div>
                        </div>
                        <div className="Date_comment">
                            <div className="dd_mm_yyyy">22/02/2022</div>
                        </div>
                    </div>
                    <hr class="style1"></hr>

                    <div className="box_comment">
                        <div className="circle_comment"></div>
                        <div className="text_comment">
                            <div className="User_comment">นิกิอาหมวย</div>
                            <img className="Star_comment" src={five_star} width="150px" height="30px"></img>
                            <div className="Write_comment">++++ ดีมากค่ะ ส่งของไวเวอร์</div>
                        </div>
                        <div className="Date_comment">
                            <div className="dd_mm_yyyy">22/02/2022</div>
                        </div>
                    </div>
                    <hr class="style1"></hr>

                    <div className="box_comment">
                        <div className="circle_comment"></div>
                        <div className="text_comment">
                            <div className="User_comment">ยอนจุนนี่</div>
                            <img className="Star_comment" src={four_star} width="150px" height="30px"></img>
                            <div className="Write_comment">ของถึงช้านิดหน่อยค่ะ แต่ได้รับครบถ้วน บวกๆๆๆ</div>
                        </div>
                        <div className="Date_comment">
                            <div className="dd_mm_yyyy">22/02/2022</div>
                        </div>
                    </div>
                    <hr class="style1"></hr>

                    <div className="box_comment">
                        <div className="circle_comment"></div>
                        <div className="text_comment">
                            <div className="User_comment">JakeAndFin</div>
                            <img className="Star_comment" src={three_star} width="150px" height="30px"></img>
                            <div className="Write_comment">ครับ</div>
                        </div>
                        <div className="Date_comment">
                            <div className="dd_mm_yyyy">22/02/2022</div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default BoxCommentRating