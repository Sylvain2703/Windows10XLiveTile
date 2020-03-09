import React from "react";
import "./Text.css";

function Text(props) {
    const {
        type,
        content,
        hintWrap = false,
        hintStyle = "caption",
        hintAlign = "left"
    } = props.content;

    if (type !== "text")
        return null;

    let className = "tile__text";

    if (hintWrap)
        className += " --wrap";

    const subtleIndex = hintStyle.indexOf("Subtle");
    className += subtleIndex > -1
        ? " --subtle --" + hintStyle.substring(0, subtleIndex)
        : " --" + hintStyle;

    className += " --" + hintAlign;

    return (
        <div className={className}>{content}</div>
    )
}

export default Text;