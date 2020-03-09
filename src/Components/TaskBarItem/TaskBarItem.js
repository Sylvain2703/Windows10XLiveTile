import React from "react";
import SymbolIcon from "../SymbolIcon/SymbolIcon";
import "./TaskBarItem.css";

function TaskBarItem({ children, image, icon, title, isSelected, onClick }) {
    return (
        <button className={"taskbar-item no-style" + (isSelected ? " taskbar-item--selected" : "")}
            title={title} onClick={onClick}>
            {image ? <img src={"./icons/" + image} alt={title} /> :
                (icon ? <SymbolIcon>{icon}</SymbolIcon> : children)
            }
        </button>
    );
}

export default TaskBarItem;