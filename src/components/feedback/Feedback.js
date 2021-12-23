import React from "react";

const Feedback = () => {

    const alertSuccess = () =>{
        alert("We have received your request");
    }
  return (
    <div className="Feedback">
      <div className="Feedback-List">
        <ul className="Feedback-Item Feedback-1">
            <li>
                <div>
                    <ion-icon name="star-outline"></ion-icon>
                    <p>
                        "Lorem Ipsum is simply dummy text of the printing and typesetting
                        industry. Lorem Ipsum has been the industry's standard dummy text
                        ever since the 1500s, when an unknown printer took a galley of type
                        and scrambled it to make a type specimen book."
                    </p>
                </div>
                <div>
                    <img src="/image/home/feedback/ceo.jpg" alt="" />
                    <h4>Mr. ABC</h4>
                    <span>C.E.O</span>
                </div>
            </li>
            <li>
                <h1>What Our Clients Are Saying.</h1>
            </li>
        </ul>
        <ul className="Feedback-Item Feedback-2">
            <li>
                
            </li>
            <li>
                <div>
                    <img src="/image/home/feedback/success-icon.jpg" alt="" />
                    <h1>Get Your Vehicle Insurance Now!</h1>
                </div>
                <div>
                    <input type="text" placeholder="Your Email"/>
                    <button onClick={alertSuccess}>Start Trial</button>
                </div>
            </li>
        </ul>
        <div></div>
      </div>
    </div>
  );
};

export default Feedback;
