import React from "react";
import "./Image.css";

function Image(props) {
    const {
        type,
        src,
        alt = "",
        placement = "inline",
        hintOverlay = 20,
        hintCrop = "none"
    } = props.content;

    if (type !== "image")
        return null;

    let className = "tile__image";

    if (placement === "background")
        className += " --background";

    if (hintCrop === "circle")
        className += " --crop-circle"

    const opacityForOverlay = 1 - (hintOverlay / 100);

    return (
        <div className={className}>
            <img src={src} alt={alt} style={{ opacity: opacityForOverlay }} />
        </div>
    )
}

export default Image;