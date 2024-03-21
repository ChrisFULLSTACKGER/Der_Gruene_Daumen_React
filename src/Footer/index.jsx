import React from "react";
import Contact from "../Contact";
import Impress from "../Impressum";



const Footer = () => {
    return(
        <div>
            <p>Footer component</p>
            <div>
                <Impress/>
                <Contact/>
            </div>

        </div>
    );
};

export  default Footer;