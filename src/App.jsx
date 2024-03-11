import Nav from './Components/nav';
import Doctor from './Pages/Doctor';
import Home from './Pages/Home';
import Labtest from './Pages/Labtest';
import Hospital from './Pages/Hospital';
import {Route,Routes} from "react-router-dom"
import './App.css';
import Footer from './Components/footer';
import Login from "./Components/login"


function App() {
  
  return(
    <div className="relative flex min-h-screen w-screen flex-col font-mont ">
    <Nav></Nav> 

    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/doctor" element={<Doctor />} />
        <Route path="/hospital" element={<Hospital/>} />
        <Route path="/labtest" element={<Labtest />} />
        <Route path="/login" element={<Login/>} />
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
