import { CustomHeader } from "./components/CustomHeader"
import { SearchBar } from "./components/SearchBar"
import { mockGifs } from "./mock-data/gifs.mock"

export const GifsApp = () => {
    return (
        <>
            <CustomHeader
                title="Gifs searcher"
                description="Find and share the perfect gif"
            />

            <SearchBar />

            <div className="previous-searches">
                <h2>Previous searches</h2>
                <ul className="previous-searches-list">
                    <li>Goku</li>
                    <li>Naruto</li>
                    <li>Snake</li>
                    <li>Kratos</li>
                </ul>
            </div>

            <div className="gifs-container">
                {
                    mockGifs.map( (gif) => (
                        <div key={gif.id} className="gif-card">
                            <img src={ gif.url } alt={ gif.title } />
                            <h3>{ gif.title }</h3>
                            <p>
                                { gif.width }x{ gif.height } (1.5mb)
                            </p>
                        </div>
                    ))
                }
            </div>
        </>
    )
}