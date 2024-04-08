import React from "react";
import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import './App.css';
import classNames from "classnames"
import Header from "./Header";
import Logo from "./Logo";
import Footer from "./Footer";
import Navbar from "./Navbar";
import Content from "./Content/ContentMainComponent"

import Hello from "./Content/ContentTestComponentHello";
import Goodbye from "./ContentTestComponentGoodbye";

const App = () => {
  return (
    <div className="App">
        {/*<Router>*/}
        {/*    <Routes>*/}
        {/*        <Route exact path="/" element={<Hello/>}/>*/}
        {/*        <Route path='/goodbye' element={<Goodbye/>}/>*/}
        {/*    </Routes>*/}
        {/*</Router>*/}
       <Header/>
        <Logo />
        <Navbar/>
        <Content/>
        <Footer/>
    </div>
  );
}

export default App;
