import React, { useState } from "react";
import Start from "../Start/Start";
import Tile from "../Tile/Tile";
import TaskBar from "../TaskBar/TaskBar";
import TaskBarItem from "../TaskBarItem/TaskBarItem";
import DataTiles from "../../StaticDatas/Tiles.json";
import DataTaskBar from "../../StaticDatas/TaskBar.json";
import "./Home.css";

function Home() {
    const [startOpened, setStartOpened] = useState(false);

    function isInFullScreen() {
        return document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen;
    }

    function toggleFullScreen() {
        if (!isInFullScreen()) {
            if (document.documentElement.requestFullScreen)
                document.documentElement.requestFullScreen();
            else if (document.documentElement.mozRequestFullScreen)
                document.documentElement.mozRequestFullScreen();
            else if (document.documentElement.webkitRequestFullScreen)
                document.documentElement.webkitRequestFullScreen(Element.ALLOW_KEYBOARD_INPUT);
        }
        else {
            if (document.exitFullscreen)
                document.exitFullscreen();
            else if (document.cancelFullScreen)
                document.cancelFullScreen();
            else if (document.mozCancelFullScreen)
                document.mozCancelFullScreen();
            else if (document.webkitCancelFullScreen)
                document.webkitCancelFullScreen();
        }
    }

    return (
        <div className="home">
            {startOpened ?
                <Start>
                    {DataTiles.tiles.map((tile, index) =>
                        <Tile key={index} image={tile.image} title={tile.title} liveTile={tile.liveTile} />
                    )}
                </Start>
                : null
            }

            <TaskBar isStartOpened={startOpened}
                onStartClick={() => setStartOpened(!startOpened)} onTaskViewClick={toggleFullScreen}>
                {DataTaskBar.taskbarEntries.map((entries, index) =>
                    <TaskBarItem image={entries.image} title={entries.title} />
                )}
            </TaskBar>
        </div>
    );
}

export default Home;
