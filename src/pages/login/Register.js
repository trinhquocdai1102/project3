import React from "react";
import { Link } from "react-router-dom";
import FormContent from "./FormContent";
import { RegisterItems } from "./FormItems";

const Register = () => {
	return (
		<div className="Login">
			<div className="Login-List">
				<h1>Creat your account</h1>
				<FormContent
					data={RegisterItems}
					desc={"Already Have Account?"}
					button={"Sign Up"}
					link="/Login"
				/>
				<div className="GoHomeBtn">
					<Link to="/">
						<ion-icon name="home-outline"></ion-icon>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Register;
