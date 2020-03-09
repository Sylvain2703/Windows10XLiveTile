import React from "react";
import TextBox from "../TextBox/TextBox";
import SymbolIcon from "../SymbolIcon/SymbolIcon";
import "./Start.css";

function Start({ children }) {
    return (
        <div className="start center">
            <div className="start__header">
                <img className="start__header__picture" src="./user.jpg" alt="User" />
                <TextBox placeholderText="Search the web and your stuff"
                    leftIcon={<SymbolIcon>&#xE721;</SymbolIcon>}
                    rightIcon={<SymbolIcon>&#xE720;</SymbolIcon>} />
            </div>
            <div className="start__tiles">
                <div className="start__tiles__title">My apps and websites</div>
                <div>{children}</div>
            </div>
        </div>
    );
}

export default Start;