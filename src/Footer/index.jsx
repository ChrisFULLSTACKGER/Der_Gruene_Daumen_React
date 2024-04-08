import React from "react";
import Contact from "../Contact";
import Impress from "../Impressum";
import Header from "../Header";



const Footer = () => {
    return(
        <div>
            <p>Footer component</p>
            <div>
                <Impress/>
                <Contact/>
                <Header/>
            </div>

        </div>
    );
};

export  default Footer;