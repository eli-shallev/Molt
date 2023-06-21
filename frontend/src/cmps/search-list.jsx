import { useNavigate } from "react-router-dom"
import { SearchPreview } from "./search-preview"

export function SearchList({ items, handleSubmit }) {
    const navigate = useNavigate()

    if (!items || !items.length) return (
        <div className="search-list">
            <div className="svg-container">
                <svg viewBox="0 0 32 16" >
                    <path d="M 16,0 L32,16 H0 Z" className="arrow-shadow"></path>
                    <path d="M 16,1 L31,16 H1 Z"></path>
                </svg>
            </div>
            <span className="search-list-no-results">
                Nothing came up with that search 😕
            </span>
        </div>
    )

    return (
        <div className="search-list">
            <div className="svg-container">
                <svg viewBox="0 0 32 16" >
                    {/* <path d="M 16,0 L32,16 H0 Z" className="arrow-shadow"></path> */}
                    <path d="M 16,1 L31,16 H1 Z"></path>
                </svg>
            </div>
            <div className="search-list-content">
                {items.slice(0, 5).map(item => {
                    return (
                        <>
                            <SearchPreview key={item._id} item={item} />
                            <div key={item._id + 'sep'} className="search-list-separator"></div>
                        </>
                    )
                })}
            </div>
            <div className="search-list-footer">
                {items.length > 5 && (
                    <span onClick={handleSubmit}>
                        {`Show all ${items.length > 100 ? '100' : items.length} results`}
                    </span>
                )}
            </div>
        </div>
    )
}