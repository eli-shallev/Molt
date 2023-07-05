import { SearchPreview } from "./search-preview"

export function SearchListMobile({ items }) {
    if (!items || !items.length) {
        return (
            <div className="search-list-mobile-no-result">
               <div className="desktop-search-no-results">
                    <img className="no-result-img" src={require("../assets/images/no-search-result.png")} alt="" />
                    <span>No results found</span>
                </div>
            </div>
        )
    }
    return (
        <div className="search-list-mobile">
            {items.map(item => {
                return (
                    <SearchPreview key={item._id} item={item} />
                )
            })}
        </div>
    )
}