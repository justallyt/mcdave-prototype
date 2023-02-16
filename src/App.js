import './App.css';
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import { Routes, Route, useLocation } from "react-router-dom"
import Expertise from './pages/Expertise';
import SingleCapability from './pages/SingleCapability';
import Contact from "./pages/Contact"
function App() {
  const location = useLocation()

  const alwaysOnTopPage = () =>{
       window.scrollTo(0, 0);
  }
  useEffect(()=>{
         alwaysOnTopPage()
  },[location])
  return (
    <div className="App">
           <Routes>
                 <Route path='/' element={<Home />} />
                 <Route path='/company/' element={<About />} />
                 <Route path='/expertise/' element={<Expertise />} />
                 <Route path='/expertise/:id' element={<SingleCapability />} />
                 <Route path='/contact-us/' element={<Contact />} />
           </Routes>
    </div>
  );
}

export default App;
