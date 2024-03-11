import React from "react";
import './App.css';
import classNames from "classnames"
import Header from "./Header";
import Logo from "./Logo";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Title from "./Logo";


const currentDate = new Date();

const App = () => {
  return (
    <div className="App">
       <Header/>
        <Logo />
        <Navbar/>
        <Footer/>
    </div>
  );
}

export default App;
