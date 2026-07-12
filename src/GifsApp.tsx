import { useState } from "react";
import { CustomHeader } from "./components/CustomHeader";
import { GifList } from "./components/GifList";
import { PreviousSearches } from "./components/PreviousSearches";
import { SearchBar } from "./components/SearchBar";
import { mockGifs } from "./mock-data/gifs.mock";

export const GifsApp = () => {

    const [ previousTerms, setPreviousTerms ] = useState([]);

    const handleTermClick = ( term: string = "" ) => {
        console.log({ term });
    }

    const handleSearch = ( query: string ) => {
        query = query.toLocaleLowerCase().trim();
        if ( query.length === 0 ) return;
        if ( previousTerms.includes(query)) return;

        setPreviousTerms( [ query, ...previousTerms].slice(0,7) );
    }

    return (
        <>
            <CustomHeader
                title="Gifs searcher"
                description="Find and share the perfect gif"
            />

            <SearchBar
                placeholder="Search gifs"
                onQuery={  handleSearch }
            />

            <PreviousSearches
                searches={previousTerms}
                onLabelClicked={handleTermClick}
            />

            <GifList gifs={ mockGifs }/>
        </>
    )
}