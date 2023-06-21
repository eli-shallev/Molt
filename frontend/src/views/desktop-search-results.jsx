import { useLocation } from "react-router-dom"
import { FullList } from "../cmps/full-list"
import { HeaderDesktop } from "../cmps/header-desktop"

export function DesktopSearchResults() {
    const { state } = useLocation()
    return (
        <>
            <HeaderDesktop />
            <div className="desktop-search-results">
                <FullList title={'Search Results'} items={state.items} type={'restaurant'} />
            </div>
        </>
    )
}