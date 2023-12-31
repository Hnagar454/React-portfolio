import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import Skill from './Components/Skill';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Proficiancy from './Components/Proficiancy';
import Education from './Components/Education';
import Experience from './Components/Experience'
import Footer from './Components/Footer';
import { BrowserRouter, Route, Router } from 'react-router-dom';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<Navbar/>
<Home />
<Skill />
<Proficiancy />
<Education/>
<Experience />
<Footer />



  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
