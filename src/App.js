import Nav from './Components/nav';
import Doctor from './Pages/Doctor';
import Home from './Pages/Home';
import {Route,Routes} from "react-router-dom"
import './App.css';
import Footer from './Components/footer';


function App() {
  
  return(
    <div className="relative flex min-h-screen w-screen flex-col font-mont ">
    <Nav></Nav> 

    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/doctor" element={<Doctor />} />
        {/* <Route path="/hospital" element={<Hospital/>} />
        <Route path="/labtest" element={<LabTest />} /> */}
    </Routes>
    <Footer/>
    </div>
  );
}

export default App;
