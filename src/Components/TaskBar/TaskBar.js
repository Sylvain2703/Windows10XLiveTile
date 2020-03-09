import React from "react";
import TaskBarItem from "../TaskBarItem/TaskBarItem";
import "./TaskBar.css";

function TaskBar({ children, isStartOpened, isTaskViewOpened, onStartClick, onTaskViewClick }) {
    return (
        <div className="taskbar center">
            <TaskBarItem title="Start" isSelected={isStartOpened} onClick={onStartClick}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 110 110">
                    <defs>
                        <linearGradient id="selected" x1="1" y1="0" x2="0" y2="1">
                            <stop stopColor="rgb(0, 179, 235)" offset="0%" />
                            <stop stopColor="rgb(2, 78, 151)" offset="100%" />
                        </linearGradient>
                    </defs>
                    <path d="M11 23.4L46.69 18.54L46.7 52.96L11.03 53.17L11 23.4ZM46.67 56.93L46.7 91.38L11.03 86.48L11.03 56.7L46.67 56.93ZM51 17.91L98.31 11L98.31 52.53L51 52.9L51 17.91ZM98.33 57.26L98.31 98.59L51 91.92L50.93 57.18L98.33 57.26Z" />
                </svg>
            </TaskBarItem>

            {children}

            <TaskBarItem icon="&#xE7C4;" title="Task view" isSelected={isTaskViewOpened} onClick={onTaskViewClick} />
        </div>
    );
}

export default TaskBar;