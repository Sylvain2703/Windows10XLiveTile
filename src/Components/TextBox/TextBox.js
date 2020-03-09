import React from "react";
import "./TextBox.css";

function TextBox({ placeholderText, leftIcon, rightIcon }) {
    return (
        <div className="textbox">
            {leftIcon ? <button className="textbox__left-btn no-style">{leftIcon}</button> : null}
            <input className={"textbox__input" +
                (leftIcon ? " textbox__input--left-btn" : "") +
                (rightIcon ? " textbox__input--right-btn" : "")} placeholder={placeholderText} />
            {rightIcon ? <button className="textbox__right-btn no-style">{rightIcon}</button> : null}
        </div>
    );
}

export default TextBox;