import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { LoginItems } from "./LoginItems";

const Login = () => {
	const { register, handleSubmit } = useForm();
	const [showPassword, setShowPassword] = useState("password");
	// const [opacity, setOpacity] = useState(false)

	const showHidePassword = () => {
		if (showPassword === "password") {
			setShowPassword("text");
		} else setShowPassword("password");
	};

	// Same with register
	const handleChangeOpacity = () => {
		const changeInputs = document.querySelectorAll(".Form-Input input");
		const changeIcons = document.querySelectorAll(".Form-Input ion-icon");
		for (let i = 0; i < changeInputs.length; i++) {
			changeInputs[i].addEventListener("focus", function () {
				changeInputs[i].style.borderBottom = "2px solid #000";
				changeIcons[i].style.opacity = "1";
			});
			changeInputs[i].addEventListener("blur", function () {
				changeInputs[i].style.borderBottom = "2px solid #9d9999";
				changeIcons[i].style.opacity = "0.5";
			});
		}
	};
	window.onbeforeunload = function () {
		return "Are you sure you want to leave?";
	};
	// Same with register

	const onSubmit = (data) => console.log(data);

	return (
		<div className="Login">
			<div className="Login-List">
				<h1>Login</h1>
				<form onSubmit={handleSubmit(onSubmit)}>
					<div>
						{LoginItems.map((item, index) => {
							return (
								<div key={index} className={item.className}>
									<label>
										<p>{item.name}</p>
										<div className={item.classInputName}>
											<input
												name={item.name}
												type={item.type || showPassword}
												placeholder={item.placeholder}
												{...register(item.name)}
												required
												onFocus={handleChangeOpacity}
											/>
											<ion-icon
												name={item.icon}
											></ion-icon>
										</div>
									</label>
								</div>
							);
						})}
						<ul className="Forgot-Password">
							<li className="Show-Password">
								<label>
									<input
										type="checkbox"
										onChange={showHidePassword}
									/>
									<span>Show password</span>
								</label>
							</li>
							<li className="Form-ForgotPass">
								<Link to="/ForgotPassword">
									Forgot Password?
								</Link>
							</li>
						</ul>
					</div>
					<div className="DivForm">
						<button className="BtnForm" type="submit">
							Login
						</button>
					</div>
				</form>
				<div className="FormWithOther">
					<h4>Or Sign Up Using</h4>
					<ul>
						<li>
							<a
								href="https://www.facebook.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<ion-icon name="logo-facebook"></ion-icon>
							</a>
						</li>
						<li>
							<a
								href="https://gmail.com/"
								target="_blank"
								rel="noopener noreferrer"
							>
								<ion-icon name="logo-google"></ion-icon>
							</a>
						</li>
						<li>
							<a
								href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoidmkifQ%3D%3D%22%7D"
								target="_blank"
								rel="noopener noreferrer"
							>
								<ion-icon name="logo-twitter"></ion-icon>
							</a>
						</li>
					</ul>
				</div>

				<div className="FormWithSignUp">
					<h4>Or Sign Up Using</h4>
					<div>
						<Link to="/Register">SIGN UP</Link>
					</div>
				</div>
				<div className="GoHomeBtn">
					<Link to="/">
						<ion-icon name="home-outline"></ion-icon>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Login;
