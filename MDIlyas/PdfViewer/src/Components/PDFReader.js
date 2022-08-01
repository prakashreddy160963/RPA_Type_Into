import React, { useState } from "react";
import "../Styles/PDFReader.css"
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack';

export default function PDFReader() {

    const [PdfPages, setPdfPages] = useState(null);

    const [pageNumber, setPageNumber] = useState(1);

    const PDF_File = require('../resources/thebook.pdf');

    const onPDFPage = ({ numPages }) => {
        setPdfPages(numPages)
    }


    const onPrevious = () => {
        if (pageNumber <= 1) {
            console.log(1)
            setPageNumber(1)
        }
        else {
            console.log(pageNumber - 1)
            setPageNumber(pageNumber - 1)
        }
    }

    const onNext = () => {
        if (pageNumber >= PdfPages) {
            console.log(PdfPages)
            setPageNumber(PdfPages)
        }
        else {
            console.log(pageNumber + 1)
            setPageNumber(pageNumber + 1)
        }
    }

    const onSetThePage = (e) => {
        let page = parseInt(e.target.value)
        if (page <= 0) {
            setPageNumber(1)
        }
        else if (page >= PdfPages) {
            setPageNumber(PdfPages)
        }
        else {
            setPageNumber(page)
        }
    }

    return (
        <div className="Viewer_container" >
            <div className="Viewer_Header" >
                <h2>PDF Viewer</h2>
            </div>

            <div className="Reader_Center">
                <div className="pdf_controls_layout">
                    <button onClick={onPrevious}>Previous</button>
                    <input
                        type={"number"}
                        className="Page_Numbers"
                        value={pageNumber}
                        onChange={onSetThePage}
                    />
                    <button onClick={onNext}>Next</button>
                    <p>{pageNumber} of {PdfPages}</p>
                </div>
                <div className="Viewer_Display" >
                    <Document
                        file={PDF_File}
                        className="Doc_Display"
                        onLoadSuccess={onPDFPage}
                    >
                        <Page pageNumber={pageNumber} />
                    </Document>
                </div>
            </div>

        </div >
    );
}