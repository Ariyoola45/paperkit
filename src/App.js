
import './App.css';

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import Home from './Pages/Home'
import About from './Pages/About';

import {  Routes , Route } from 'react-router-dom';
// import Contact from './Components/Contact/Contact';
import ContactPage from './Pages/ContactPage';

function App() {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
   
    <div className="App">
    <Routes>    
     <Route path='/' element={<Home/>} />
     <Route path='/About' element={<About/>} />
     <Route path='/Contact' element={<ContactPage/>} />
    </Routes>
    </div>
   
  );
}

export default App;
