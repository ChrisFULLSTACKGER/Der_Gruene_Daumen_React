import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import classNames from "classnames"
import Header from "./Header";
import Logo from "./Logo";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Content from "./Content/ContentMainComponent"


const App = () => {
  return (
    <div className="App">
       <Header/>
        <Logo />
        <Navbar/>
        <Content/>
        <Footer/>
        <Header/>
        {/*<Router>*/}
        {/*    <Routes>*/}
        {/*        <Route exact path="/" element={}*/}
        {/*    </Routes>*/}
        {/*</Router>*/}
    </div>
  );
}

export default App;
