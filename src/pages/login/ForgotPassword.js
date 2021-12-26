import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const ForgotPassword = () => {
    const {register, handleSubmit} = useForm();


    const onSubmit = (data) => console.log(data)
    return (
    <div className="ForgotPassword Login">
        <div className="Content-Form">
        <div className="Content-Form__Container">
           <form onSubmit={handleSubmit(onSubmit)}>
            <div className="ForgotPassword-Content">
                    <label>
                        <h1>Forgot Password</h1>
                        <p>Enter your email address or phone number</p>
                        <div className="ForgotPassword-Input">
                        <input
                            name="email"
                            type="text"
                            placeholder="Your e-mail address or phone number"
                         {...register("email")}
                        />
                        </div>
                    </label>
                </div>
                <div className="DivFom">
                    <button className="BtnForm" type="submit" >Reset My Password</button>
                </div>
           </form>
            <Link className="CreateNewAcc" to="/Register">Create New Account</Link>
            <div className="GoHomeBtn">
            <Link to="/">
                <ion-icon name="home-outline"></ion-icon>
            </Link>
            </div>
        </div>
        </div>
    </div>
    );
};

export default ForgotPassword;