import React from "react";
import {useNavigate} from 'react-router-dom';

const TestComponent = () => {
    const navigate = useNavigate();
    const handleClick = () => navigate()
}

export default TestComponent;