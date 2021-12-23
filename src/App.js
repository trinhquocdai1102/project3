
import {Routes , Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/home/Home';
import Footer from './components/footer/Footer';
import CarInsurance from './pages/insurance/CarInsurance';
import ContactPage from './pages/contact/Contact';


function App() {
  return (
    <div className="App">
      <Navbar/>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/CarInsurance" element={<CarInsurance/>} />
          <Route path="/Contact" element={<ContactPage/>} />
        </Routes>
      <Footer />
    </div>    
  );
}

export default App;
