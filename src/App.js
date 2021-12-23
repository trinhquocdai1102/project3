
import {Routes , Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/home/Home';
import Footer from './components/footer/Footer';
import CarInsurance from './pages/insurance/CarInsurance';
import ContactPage from './pages/contact/Contact';
import ProcessPage from './pages/process/Process';
import UserInfo from './pages/process/UserInfo';
import VehicleInfo from './pages/process/VehicleInfo';
import Login from './pages/login/Login';


function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/CarInsurance" element={<CarInsurance/>} />
          <Route path="/Contact" element={<ContactPage/>} />
          <Route path="/Process" element={<ProcessPage/>} />
          <Route path="/UserInfo" element={<UserInfo/>} />
          <Route path="/VehicleInfo" element={<VehicleInfo/>} />
          <Route path="/Login" element={<Login/>} />
        </Routes>
      <Footer />
    </div>    
  );
}

export default App;
