import React from "react"
import { Worker } from '@react-pdf-viewer/core';

// import PDFView from "./PDFView";
import Search from "./Search";
// import Highlight from "./Highlight";

const Display: React.FC = () => {

    const Filename = require("../assets/invoices.pdf")

    return (
        <div>
            <div>
                <h2>PDF Viewer</h2>
            </div>
            <div>
                <h3>PDF Display</h3>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                    {/* <Highlight fileUrl={Filename} /> */}
                    <Search fileUrl={Filename} />
                </Worker>
            </div>
        </div>
    )
}

export default Display;