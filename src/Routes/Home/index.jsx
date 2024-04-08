import React from "react";
// import { BrowserRouter as Router, Route, Routes} from "react-router-dom";
import Header from "../../Header";
import Logo from "../../Logo";
import Footer from "../../Footer";
import Navbar from "../../Navbar";
import Content from "../../Content/ContentMainComponent";

const Home = () => {
    return (
        <div className='App'>
            <Header/>
            <Logo />
            <Navbar/>
            <Content/>
            <Footer/>
        </div>
    );
};

export default Home;