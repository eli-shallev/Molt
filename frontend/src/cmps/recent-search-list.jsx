import { useNavigate } from "react-router-dom"
import { updateRecentSearches } from "../store/user/user.action"
import { useSelector } from "react-redux"

export function RecentSearchList({ getrFilteredResult }) {
    const navigate = useNavigate()
    const user = useSelector((storeState) => storeState.userModule.user)

    function handleClick(keyWord) {
        updateRecentSearches(user._id, keyWord)
        navigate('/search', { state: { items: getrFilteredResult(keyWord) } })
    }

    async function handleClear(){
        await updateRecentSearches(user._id)
    }
    return (
        <div className="recent-search-list">
            <div className="svg-container">
                <svg viewBox="0 0 32 16" >
                    <path d="M 16,0 L32,16 H0 Z" className="arrow-shadow"></path>
                    <path d="M 16,1 L31,16 H1 Z"></path>
                </svg>
            </div>
            <div className="recent-search-list-header">
                <span className="recent-search-list-header-title">Recent searches</span>
                <button onClick={handleClear} className="recent-search-list-header-btn">Clear</button>
            </div>

            {user.recentSearches.map((search, index) => {
                return (
                    <div onClick={() => handleClick(search)} key={search + index} className="recent-search-list-item">
                        <div className="search-icon-container">
                            <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                                <path d="M23.384 21.6191L16.855 15.0901C19.8122 11.2028 19.2517 5.689 15.5728 2.47626C11.894 -0.736477 6.35493 -0.549369 2.90126 2.90431C-0.552421 6.35798 -0.739529 11.897 2.47321 15.5759C5.68595 19.2548 11.1997 19.8152 15.087 16.8581L21.616 23.3871C22.1078 23.8667 22.8923 23.8667 23.384 23.3871C23.8718 22.8987 23.8718 22.1075 23.384 21.6191ZM2.75002 9.50007C2.75002 5.77215 5.7721 2.75007 9.50002 2.75007C13.2279 2.75007 16.25 5.77215 16.25 9.50007C16.25 13.228 13.2279 16.2501 9.50002 16.2501C5.77393 16.2457 2.75443 13.2262 2.75002 9.50007Z"></path>
                            </svg>
                        </div>
                        <span className="recent-search-list-term">{search}</span>
                    </div>
                )
            })}
        </div>
    )
}