import { Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import HomePage from "./pages/home/Home";
import Footer from "./components/footer/Footer";
import CarInsurance from "./pages/insurance/CarInsurance";
import ContactPage from "./pages/contact/Contact";
import UserInfo from "./pages/process/UserInfo";
import VehicleInfo from "./pages/process/VehicleInfo";
import Login from "./pages/login/Login";
import Register from "./pages/login/Register";
import MotorInsurance from "./pages/insurance/MotorInsurance";
import ForgotPassword from "./pages/login/ForgotPassword";
import SubAgreement from "./components/privacy-policy/SubAgreement";
import PrivacyPolicyContent from "./components/privacy-policy/PrivacyPolicyContent";

function App() {
	return (
		<div className="App">
			<Navbar />
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/CarInsurance" element={<CarInsurance />} />
				<Route
					path="/MotorBikeInsurance"
					element={<MotorInsurance />}
				/>
				<Route path="/Contact" element={<ContactPage />} />
				<Route path="/UserInfo" element={<UserInfo />} />
				<Route path="/VehicleInfo" element={<VehicleInfo />} />
				<Route path="/Login" element={<Login />} />
				<Route path="/Register" element={<Register />} />
				<Route path="/ForgotPassword" element={<ForgotPassword />} />
				<Route path="/SubAgreement" element={<SubAgreement />} />
				<Route
					path="/PrivacyPolicyContent"
					element={<PrivacyPolicyContent />}
				/>
			</Routes>
			<Footer />
		</div>
	);
}

export default App;
