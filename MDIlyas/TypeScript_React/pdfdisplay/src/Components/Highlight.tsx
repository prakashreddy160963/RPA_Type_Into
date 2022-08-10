import React from "react";
import { Viewer } from "@react-pdf-viewer/core"
import { highlightPlugin } from "@react-pdf-viewer/highlight"

// CSS
import "@react-pdf-viewer/core/lib/styles/index.css"

interface HighlightProps {
    fileUrl: string;
}

const Highlight: React.FC<HighlightProps> = ({ fileUrl }) => {

    const HighlightPluginInstance = highlightPlugin({})

    return (
        <div className="Highlight">
            <div>
                <Viewer
                    fileUrl={fileUrl}
                    plugins={[HighlightPluginInstance]}
                />
            </div>
        </div>
    )
}

export default Highlight;