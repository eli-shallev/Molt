import { SearchPreview } from "./search-preview"

export function SearchListMobile({ items }) {

    return (
        <div className="search-list-mobile">
            {items.map(item=>{
                return(
                    <SearchPreview item={item}/>
                )
            })}
        </div>
    )
}