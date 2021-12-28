import React from "react";
import { Link } from "react-router-dom";
import { PrivacyContentItems } from "./PrivacyItems";

const PrivacyPolicyContent = () => {
	return (
		<div className="Content Privacy-Content">
			<h1>Privacy policy content</h1>
			{PrivacyContentItems.map((item, index) => {
				return <p key={index}>{item.description}</p>;
			})}
			<div className="PrivacyPolicy-Content">
				<span>
					<Link to="/SubAgreement">Care Subscriber Agreement</Link>
					&nbsp; and the &nbsp;
					<Link to="/PrivacyPolicyContent">Care Privacy Policy.</Link>
				</span>
			</div>
		</div>
	);
};

export default PrivacyPolicyContent;
