// import { Link } from "react-router-dom";
import { ContactHeader, ContactInputList, ContactRight } from "./ContactItems";

function Contact() {
	return (
		<div className="Contact Content">
			<title>Contact us</title>
			<div className="Contact-Header">
				{ContactHeader.map((item, index) => {
					return <p key={index}>{item.description}</p>;
				})}
			</div>
			<div className="Contact-Center">
				<div className="Contact-Left">
					<div className="Contact-LeftTitle">
						<h3>Send us message</h3>
						<p>
							Send us a message and we'll respond within 24 hours.
						</p>
					</div>
					<div className="Contact-Input">
						{ContactInputList.map((item, index) => {
							return (
								<div key={index} className={item.cName}>
									<label>
										<p>{item.name}</p>
										<input
											type={item.type}
											placeholder={item.placeholder}
										/>
									</label>
								</div>
							);
						})}
						<div className="Contact-TextArea">
							<label>
								<p>Message</p>
								<textarea placeholder="Type our message here"></textarea>
							</label>
						</div>
						<button className="Contact-SubmitBtn">Submit</button>
					</div>
				</div>
				<div className="Contact-Right">
					<div className="Contact-RightTitle">
						<h3>Contact information</h3>
					</div>
					<div className="Contact-RightContent">
						<ul>
							{ContactRight.map((item, index) => {
								return (
									<li key={index}>
										<ion-icon
											name={item.thumbnail}
										></ion-icon>
										<span>{item.description}</span>
									</li>
								);
							})}
						</ul>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Contact;
