import React from "react";
import { Viewer } from "@react-pdf-viewer/core"
import { searchPlugin } from '@react-pdf-viewer/search';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/search/lib/styles/index.css';
import "../Styles/Search.css"

interface SearchProps {
    fileUrl: string;
}

const Search: React.FC<SearchProps> = ({ fileUrl }) => {

    const searchPluginInstance = searchPlugin({
        keyword: 'PDF'
    })

    const { ShowSearchPopoverButton } = searchPluginInstance;

    return (
        <div>
            <div className="Search">
                <ShowSearchPopoverButton />
            </div>
            <div className="Search_PDF">
                <div className="search_marker"></div>
                <Viewer fileUrl={fileUrl} plugins={[searchPluginInstance]} />
            </div>
        </div>
    )
}

export default Search;