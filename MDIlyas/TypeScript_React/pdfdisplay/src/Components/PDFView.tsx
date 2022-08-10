import React from "react";
import { Viewer } from "@react-pdf-viewer/core"

import '@react-pdf-viewer/core/lib/styles/index.css';


interface PDFViewProps {
    fileUrl: string;
}

const PDFView: React.FC<PDFViewProps> = ({ fileUrl }) => {
    return (
        <div>
            <Viewer fileUrl={fileUrl} />
        </div>
    )
}

export default PDFView;