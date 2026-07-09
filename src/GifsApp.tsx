import { CustomHeader } from "./components/CustomHeader"
import { GifList } from "./components/GifList"
import { PreviousSearches } from "./components/PreviousSearches"
import { SearchBar } from "./components/SearchBar"
import { mockGifs } from "./mock-data/gifs.mock"

export const GifsApp = () => {
    return (
        <>
            <CustomHeader
                title="Gifs searcher"
                description="Find and share the perfect gif"
            />

            <SearchBar placeholder="Search gifs"/>

            <PreviousSearches />

            <GifList gifs={ mockGifs }/>
        </>
    )
}