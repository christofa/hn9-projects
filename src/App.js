import React from "react";
import "./App.css";
import Data from './components/Data'
import Footer from './components/Footer'
import Contact from "./components/Contact";
import {BrowserRouter as Router, Switch, Route, Routes} from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Data/>}/>
        <Route path="/contact" element={<Contact/>}/>
      </Routes>
      <Footer/>
    </Router>
  );
}

export default App;
