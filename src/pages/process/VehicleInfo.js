import React from "react";
import { useForm } from "react-hook-form";
import PrivacyPolicy from "../../components/privacy-policy/PrivacyPolicy";
import ResetSubmitBtn from "../../components/reset-submit-btn/ResetSubmitBtn";
import ProcessHeader from "./ProcessHeader";
import { VehicleInfoItems } from "./ProcessItems";

const VehicleInfo = () => {
	const { register, handleSubmit } = useForm();
	const [disable, setDisable] = React.useState(true);

	const onSubmit = (data) => {
		console.log(data);
		alert("Submit your vehicle information success.");
		// document.querySelector('.Process-HeaderItem img').style.backgroundColor = 'green'
	};
	const onChange = () => {
		setDisable(!disable);
	};

	return (
		<div className="ProcessInfo VehicleInfo">
			<ProcessHeader />
			<form onSubmit={handleSubmit(onSubmit)}>
				<ul className="Process-Content">
					<h2>Add your vehicle information</h2>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipiscing elit,
						sed do eiusmod tempor incididunt ut labore et dolore
						magna aliqua. Ut enim ad minim veniam, quis nostrud
						exercitation ullamco laboris nisi ut aliquip ex ea
						commodo consequat. Duis aute irure dolor in
						reprehenderit in voluptate velit esse cillum dolore eu
						fugiat nulla pariatur. Excepteur sint occaecat cupidatat
						non proident, sunt in culpa qui officia deserunt mollit
						anim id est laborum.
					</p>
					{VehicleInfoItems.map((item, index) => {
						return (
							<li key={index} className={item.className}>
								<label>
									<p>{item.title}</p>
									<input
										name={item.name}
										type={item.type}
										placeholder={item.placeholder}
										{...register(item.name, {
											required: true,
										})}
									/>
								</label>
							</li>
						);
					})}
					<ResetSubmitBtn disable={disable} />
				</ul>
			</form>
			<PrivacyPolicy onChange={onChange} />
		</div>
	);
};

export default VehicleInfo;
