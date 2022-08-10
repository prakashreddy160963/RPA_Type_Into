import React from "react";
import { Worker, Viewer } from "@react-pdf-viewer/core";

import "../Styles/DisplayPDF.css"
import "@react-pdf-viewer/core/lib/styles/index.css"
import Highlight from "./Highlight";

export default function Display() {

    const filePdf = require("../assets/invoice.pdf")

    return (
        <>
            <div className="Display_PDF" >
                <Highlight fromtop={284} fromleft={62} height={18} />
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                    <Viewer
                        fileUrl={filePdf}
                        className="Display_File"
                    />
                </Worker>
            </div>
        </>
    )
}