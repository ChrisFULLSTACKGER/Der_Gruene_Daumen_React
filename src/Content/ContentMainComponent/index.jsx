import React from 'react';
import './contentgravecare.css';
import ContentHome from "../Content-1";
import ContentTeam from "../Content-2";
import ContentGardening from "../Content-3";
import ContentLandscape from "../Content-4";
import ContentFloristik from "../Content-5";
import ContentGravecare from "../Content-6";



const Content = () => {
    return (
        <div className='contentWrapper1 contentWrapper2'>
            <p>Content Component</p>
            <ContentHome/>
            <ContentTeam/>
            <ContentGardening/>
            <ContentLandscape/>
            <ContentFloristik/>
            <ContentGravecare/>
        </div>
    );
};


export default Content;