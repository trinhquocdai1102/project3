
import {Routes , Route} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/Navbar';
import HomePage from './pages/home/Home';
import Footer from './components/footer/Footer';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <HomePage />
        {/* <Routes>
          <Route path="/" element={<Navbar/>} />
        </Routes> */}
      <Footer />
    </div>    
  );
}

export default App;
