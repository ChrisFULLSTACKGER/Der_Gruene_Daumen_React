import React from "react";
import {useNavigate} from 'react-router-dom';

const Hello = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/goodbye');

    return (
        <button type= "button" onClick={handleClick}>
            Goodbye
        </button>
    )
};

export default Hello;