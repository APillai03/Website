import React from "react";
import "../styles.css";
import image from "./logo.png";
function Header() {
    return (
        <div className="Header">
            <div className="logo">
                <img src={image} />
            </div>
            <div className="Options">
                <a href="#">HOME</a>
                <a href="#">ABOUT</a>
                <a href="#">CONTACT</a>
            </div>
        </div>
    )
};

export default Header;