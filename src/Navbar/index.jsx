import React from 'react';
import "@fontsource/ubuntu/300.css"
import './navbar.css';




const navbar = () => {
    return (
        <div className='navbarWrapper'>
            <div className='navbarContainer'>
                    <p className='navbarItem navbarBox'>Home</p>
                    <p className='navbarItem navbarBox'>Team</p>
                    <p className='navbarItem navbarBox'>Gärtnerei</p>
                    <p className='navbarItem navbarBox'>Landschaftsgärtner</p>
                    <p className='navbarItem navbarBox'>Floristik</p>
                    <p className='navbarItem navbarBox'>Grabbetreuung</p>
                    <p className='navbarItem navbarBox'>Kontakt</p>
                    <p className='navbarItem navbarBox'>Impressum</p>
                    <p className='navbarItem navbarBox'>Social Media</p>
            </div>
        </div>
    );
};
export default navbar;