import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import classNames from "classnames"
import Home from './Routes/Home'
import './App.css';
import Gallery from "./Gallery";
import Contact from "./Contact";


const App = () => {
  return (
      <Routes>
          <Route path='/' element={<Home/>}/>
          <Route path='/gallery' element={<Gallery/>}/>
          <Route path='/contact' element={<Contact/>}/>
      </Routes>
  );
};

export default App;
