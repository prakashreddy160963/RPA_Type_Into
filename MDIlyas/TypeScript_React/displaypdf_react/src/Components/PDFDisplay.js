import React, { useCallback, useState } from 'react';
import { Document, Page } from 'react-pdf/dist/esm/entry.webpack5';
import "../Styles/PDFDisplay.css"
import samplePDF from '../assets/TestPDF.pdf';

function highlightPattern(text, pattern) {
    const splitText = text.split(pattern);

    if (splitText.length <= 1) {
        return text;
    }

    const matches = text.match(pattern);

    return splitText.reduce((arr, element, index) => (matches[index] ? [
        ...arr,
        element,
        <mark key={index} className="PDF_Mark">
            {matches[index]}
        </mark>,
    ] : [...arr, element]), []);
}

export default function Test() {
    const [searchText, setSearchText] = useState('');

    const textRenderer = useCallback(
        (textItem) => {
            return highlightPattern(textItem.str, searchText);
        },
        [searchText]
    );

    function onChange(event) {
        setSearchText(event.target.value);
    }

    return (
        <div className='PDF_Display'>
            <div>
                <label htmlFor="search">Search:</label>
                <input type="search" id="search" value={searchText} onChange={onChange} />
            </div>
            <Document file={samplePDF}>
                <Page
                    pageNumber={1}
                    customTextRenderer={textRenderer}
                />
            </Document>

        </div>
    );
}