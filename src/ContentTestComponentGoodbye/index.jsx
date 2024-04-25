import React from 'react';
import {useNavigate} from 'react-router-dom';

const Goodbye = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate('/hello');

    return (
        <button type="button" onClick={handleClick}>
            Hello
        </button>
    );
};

export default Goodbye