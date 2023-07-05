import { useLocation } from "react-router-dom"
import { FullList } from "../cmps/full-list"
import { HeaderDesktop } from "../cmps/header-desktop"

export function DesktopSearchResults() {
    const { state } = useLocation()
    if (!state.items || !state.items.length) {
        return (
            <>
                <HeaderDesktop />
                <div className="desktop-search-no-results">
                    <img className="no-result-img" src={require("../assets/images/no-search-result.png")} alt="" />
                    <span>No results found</span>
                </div>
            </>
        )
    }
    return (
        <>
            <HeaderDesktop />
            <div className="desktop-search-results">
                <FullList title={'Search Results'} items={state.items} type={'restaurant'} />
            </div>
        </>
    )
}