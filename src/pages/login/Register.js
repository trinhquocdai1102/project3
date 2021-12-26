import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import {Link} from 'react-router-dom'
import { RegisterItems } from './RegisterItems';

const Register = () => {
    const {register, handleSubmit} = useForm();
    const [showPassword, setShowPassword] = useState('password')

    const showHidePassword = () => {
        if(showPassword === 'password') {
            setShowPassword('text')
        }else (setShowPassword('password'))
    }

    
    // Same with login
    const handleChangeOpacity = () => {
        const changeInputs = document.querySelectorAll(".Form-Input input");
        const changeIcons = document.querySelectorAll(".Form-Input ion-icon")
        for(let i = 0; i < changeInputs.length; i++){
            changeInputs[i].addEventListener("focus", function(){
                changeInputs[i].style.borderBottom = "2px solid #000";
                changeIcons[i].style.opacity = "1";
            });
            changeInputs[i].addEventListener("blur", function(){
                changeInputs[i].style.borderBottom = "2px solid #9d9999";
                changeIcons[i].style.opacity = "0.5";
            });
        }
    }
    window.onbeforeunload = function () {
        return 'Are you sure you want to leave?';
     }
    // Same with login


    const onSubmit = (data) => console.log(data)

    return (
        <div className="Login">
            <div className="Login-List">
                <h1>Creat your account</h1>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div>
                        {RegisterItems.map((item, index) => {
                            return (
                                <div key={index} className={item.className}>
                                    <label>
                                        <p>{item.name}</p>
                                        <div className={item.classInputName}>
                                                <input name={item.name} type={item.type || showPassword} placeholder={item.placeholder}  {...register(item.name)} required onFocus={handleChangeOpacity} minLength={item.minLength}/>
                                                <ion-icon name={item.icon}></ion-icon>
                                        </div>
                                    </label>
                                </div>
                            )
                        })}
                        <ul className="Forgot-Password">
                            <li className="Show-Password">
                                <label>
                                    <input type="checkbox" onChange={showHidePassword}/>
                                    <span>Show password</span>
                                </label>
                            </li>
                            <li className="Form-ForgotPass"><Link to="/Login">Already Have Account?</Link></li>
                        </ul>
                    </div>
                    <div className="DivForm">
                        <button className="BtnForm" type="submit" >Sign Up</button>
                    </div>
                </form>
                <div className="GoHomeBtn"><Link to="/"><ion-icon name="home-outline"></ion-icon></Link></div>
            </div>
        </div>
    );
};

export default Register;