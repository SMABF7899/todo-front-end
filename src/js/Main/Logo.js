import React from "react";
import { useNavigate } from "react-router-dom";
import logoImage from "../../assets/TODO_WHITE.png";
import "../../css/Logo.css";

function Logo() {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/');
    };

    return (
        <div className="logo-container" onClick={handleClick}>
            <img src={logoImage} alt="Logo" className="logo-image" />
        </div>
    );
}

export default Logo;