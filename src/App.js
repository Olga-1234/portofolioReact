// import logo from './logo.svg';
// import './App.css';

import About from "./About";
import Home from "./Home";
import Other from "./Skills";
import Project from "./project";
import Footer from "./Footer";
import reactGa from "react-ga";
import {useEffect} from 'react'

// import NavBar from "./Navbar";

function App() {

useEffect(() => {
reactGa.initialize('G-6QL96YF90R')
reactGa.pageview("/")
}, [])
    return (
    <div className="col-12">
    
  
    <Home/>
    <About/>
  
    <Other/>
    <Project/>
    <Footer/>


      
    </div>
  );
}

export default App;