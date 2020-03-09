import React, { useState, useEffect } from "react";
import LiveTileContentSelector from "./LiveTileContentSelector";
import "./Tile.css";

function Tile({ image, title, liveTile }) {
    const [rotate, setRotate] = useState(false);

    useEffect(function () {
        if (!liveTile || liveTile.length < 1)
            return;

        let time = rotate ? random(5, 15) : random(10, 30);
        let timer = setTimeout(() => setRotate(!rotate), time * 1000);

        return () => clearTimeout(timer);
    }, [rotate, liveTile]);

    function random(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }

    return (
        <button className={"tile no-style" + (rotate ? " tile--rotate" : "")}>
            <div className="tile__front">
                <img className="tile__front__icon" src={"./icons/" + image} alt={title} />
                <div className="tile__front__title">{title}</div>
            </div>

            {liveTile?.map((visual, visualIndex) => {
                const binding = visual.content.find(c => c.template === "TileMedium");

                return (
                    <div key={visualIndex} className="tile__back">
                        {binding.content.map((item, itemIndex) =>
                            <LiveTileContentSelector key={itemIndex} item={item} />
                        )}

                        {binding?.branding === "logo" || binding?.branding === "nameAndLogo"
                            ? <img className="tile__back__icon" src={"./icons/" + image} alt={title} />
                            : null
                        }
                        {binding?.branding === "name" || binding?.branding === "nameAndLogo"
                            ? <div className="tile__back__title">{title}</div>
                            : null
                        }
                    </div>
                );
            })}
        </button >
    );
}

export default Tile;