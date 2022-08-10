import React from "react";
import "../Styles/DisplayPDF.css"

export default function Highlight({ fromtop, fromleft, height }) {
    const Top = fromtop + "px"
    const Left = fromleft + "px"
    const Height = height + "px"
    return (
        <canvas
            className="Display_Highlighter"
            style={{
                position: "absolute",
                top: Top,
                left: Left,
                height: Height
            }} />
    )
}