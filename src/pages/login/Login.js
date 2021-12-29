import React from "react";
import { Link } from "react-router-dom";
import FormContent from "./FormContent";
import { LoginItems } from "./FormItems";

const Login = () => {
	return (
		<div className="Login">
			<title>Login</title>
			<div className="Login-List">
				<h1>Login</h1>
				<FormContent
					data={LoginItems}
					desc={"Forgot Password?"}
					button={"Login"}
					link="/ForgotPassword"
				/>
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
