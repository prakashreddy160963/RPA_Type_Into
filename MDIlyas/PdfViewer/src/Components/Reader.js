import React, { useState, useEffect } from "react";
import "../Styles/Reader.css"
import { Worker } from "@react-pdf-viewer/core";

// Import the main component
import { Viewer } from '@react-pdf-viewer/core';

// Import the styles
import '@react-pdf-viewer/core/lib/styles/index.css';

// Import PDF

import PDF_File from "../resources/invoices.pdf"

export default function Reader() {

    const [pdfFile, setPdfFile] = useState(null)

    const [pdfError, setPdfError] = useState("PDF Will load Here");

    useEffect(() => {
        console.log(PDF_File)
        let reader = new FileReader();
        reader.readAsDataURL(PDF_File)
        reader.onloadend = (e) => {
            setPdfError(null)
            setPdfFile(e.target.result) /* It will return Base64 code */
        }
    })



    return (
        <div className="Viewer_container" >

            {/* Header */}

            <div className="Viewer_Header" >
                <h2>PDF Viewer</h2>
            </div>

            <div className="Viewer_Center">
                {/* Importing PDF File */}

                <div className="Viewer_Import">
                    {/* <form>
                        <input
                            type={"file"}
                            onChange={SettingPDFFileHandler}
                        />
                        <button className="refresh_btn" onChange={onRefresh} >Refresh</button>
                    </form> */}
                </div>

                {/* Displaying PDF File */}

                <div className="Viewer_Display" >
                    <Worker workerUrl="https://unpkg.com/pdfjs-dist@2.14.305/build/pdf.worker.min.js">
                        {pdfFile && (
                            <Viewer fileUrl={pdfFile} />
                        )}
                        {pdfError && (
                            <p>{pdfError}</p>
                        )}
                    </Worker>
                </div>
            </div>

        </div>
    );
}