import React from "react";
import Text from "./Text/Text";
import Image from "./Image/Image";

function LiveTileContentSelector({ item }) {
    if (item.type === "text")
        return <Text content={item} />
    else if (item.type === "image")
        return <Image content={item} />

    return null;
}

export default LiveTileContentSelector;