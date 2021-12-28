import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

const FormContent = ({ data, desc, button, link }) => {
	const [showPassword, setShowPassword] = useState("password");
	const { register, handleSubmit } = useForm();

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
			changeInputs[i].addEventListener("click", function () {
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

	const onSubmit = (data) => console.log(data);

	return (
		<div>
			<form onSubmit={handleSubmit(onSubmit)}>
				{data.map((item, index) => {
					return (
						<div key={index} className={item.className}>
							<label>
								<p>{item.title}</p>
								<div className={item.classInputName}>
									<input
										name={item.name}
										type={item.type || showPassword}
										placeholder={item.placeholder}
										{...register(item.name)}
										required
										onFocus={handleChangeOpacity}
										autoComplete="on"
									/>
									<ion-icon name={item.icon}></ion-icon>
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
						<Link to={link}>{desc}</Link>
					</li>
				</ul>
				<div className="DivForm">
					<button className="BtnForm" type="submit">
						{button}
					</button>
				</div>
			</form>
		</div>
	);
};

export default FormContent;
