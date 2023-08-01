import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { SearchListMobile } from "../cmps/search-list-mobile"
import { Loader } from "../cmps/loader"
import { updateRecentSearches } from "../store/user/user.action"
import { NavBar } from "../cmps/nav-bar"

export function SearchMobile() {
    const categories = useSelector((storeState) => storeState.categoryModule.categories)
    const restaurants = useSelector((storeState) => storeState.restaurantModule.restaurants)
    const isLoading = useSelector((storeState) => storeState.restaurantModule.isLoading)
    const user = useSelector((storeState) => storeState.userModule.user)
    const [filteredRestaurants, setFilteredRestaurants] = useState([])
    const [keyWord, setKeyWord] = useState('')
    const [isRecentListVisible, setIsRecentListVisible] = useState(false)
    const [isScrollTop, setIsScrollTop] = useState(true)

    useEffect(() => {
        if (keyWord !== '') {
            (async () => {
                await updateRecentSearches(user._id, keyWord)
            })()
            const filteredRestaurantsToSet = restaurants.filter(restaurant => {
                return (
                    restaurant.title.toLowerCase().includes(keyWord.toLowerCase()) ||
                    restaurant.subTitle.toLowerCase().includes(keyWord.toLowerCase()) ||
                    restaurant.description.toLowerCase().includes(keyWord.toLowerCase())
                )
            })
            setFilteredRestaurants(filteredRestaurantsToSet)
        }
        else {
            setFilteredRestaurants([])
        }
    }, [keyWord])


    useEffect(() => {
        document.addEventListener("scroll", onScroll)

        return document.removeEventListener('scrool', onScroll)
    }, [])

    function onScroll(event) {
        if (event.target.scrollingElement.scrollTop === 0) setIsScrollTop(true)
        else setIsScrollTop(false)
    }

    function handleSearch({ target }) {
        setKeyWord(prev => target.value)
    }

    function handleBlur() {
        setTimeout(() => setIsRecentListVisible(false), 100)

    }

    return (
        <>
        <NavBar/>
            {isLoading && <Loader />}
            {!isLoading &&
                <div className="search-mobile">
                    <div className={`search-mobile-header ${isScrollTop ? 'top' : ''}`}>
                        <div className="search-bar">
                            <div className="search-icon-container">
                                <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                                    <path d="M23.384 21.6191L16.855 15.0901C19.8122 11.2028 19.2517 5.689 15.5728 2.47626C11.894 -0.736477 6.35493 -0.549369 2.90126 2.90431C-0.552421 6.35798 -0.739529 11.897 2.47321 15.5759C5.68595 19.2548 11.1997 19.8152 15.087 16.8581L21.616 23.3871C22.1078 23.8667 22.8923 23.8667 23.384 23.3871C23.8718 22.8987 23.8718 22.1075 23.384 21.6191ZM2.75002 9.50007C2.75002 5.77215 5.7721 2.75007 9.50002 2.75007C13.2279 2.75007 16.25 5.77215 16.25 9.50007C16.25 13.228 13.2279 16.2501 9.50002 16.2501C5.77393 16.2457 2.75443 13.2262 2.75002 9.50007Z"></path>
                                </svg>
                            </div>
                            <input
                                type="text"
                                placeholder='Search in Molt...'
                                value={keyWord}
                                onFocus={() => setIsRecentListVisible(true)}
                                onChange={handleSearch}
                                onBlur={handleBlur}
                            />
                            {keyWord !== '' && (
                                <>
                                    <div className="clear-search-btn" onClick={() => setKeyWord('')}>
                                        <svg viewBox="0 0 24 24" aria-hidden="true" className="sc-87536c87-3 kyQJFD">
                                            <path fillRule="evenodd" clipRule="evenodd" d="M0 12C0 5.37258 5.37258 0 12 0C18.6242 0.00771476 23.9923 5.37578 24 12C24 18.6274 18.6274 24 12 24C5.37258 24 0 18.6274 0 12ZM16.782 5.96635C17.1137 5.96635 17.4317 6.09826 17.666 6.333C17.9004 6.56726 18.0321 6.88508 18.0321 7.2165C18.0321 7.54791 17.9004 7.86574 17.666 8.1L13.946 11.822C13.899 11.8689 13.8725 11.9326 13.8725 11.999C13.8725 12.0654 13.899 12.1291 13.946 12.176L17.668 15.898C18.1558 16.3864 18.1558 17.1776 17.668 17.666C17.175 18.1425 16.393 18.1425 15.9 17.666L12.176 13.946C12.1293 13.899 12.0657 13.8726 11.9995 13.8726C11.9332 13.8726 11.8697 13.899 11.823 13.946L8.101 17.668C7.60862 18.1461 6.82537 18.1461 6.333 17.668C5.84524 17.1796 5.84524 16.3884 6.333 15.9L10.055 12.176C10.102 12.1291 10.1284 12.0654 10.1284 11.999C10.1284 11.9326 10.102 11.8689 10.055 11.822L6.333 8.1C6.00166 7.78763 5.8664 7.31979 5.97994 6.87881C6.09347 6.43783 6.43783 6.09347 6.87881 5.97994C7.31979 5.8664 7.78763 6.00166 8.1 6.333L11.823 10.055C11.9206 10.1523 12.0784 10.1523 12.176 10.055L15.898 6.333C16.1323 6.09826 16.4503 5.96635 16.782 5.96635Z"></path>
                                        </svg>
                                    </div>
                                    <div className="filter-btn">
                                        <svg viewBox="0 0 20 21" fill="currentColor" >
                                            <path fillRule="evenodd" clipRule="evenodd" d="M5.41703 10.7133V17.085C5.41703 17.306 5.50483 17.5179 5.66111 17.6742C5.81739 17.8305 6.02935 17.9183 6.25037 17.9183C6.47138 17.9183 6.68334 17.8305 6.83962 17.6742C6.9959 17.5179 7.0837 17.306 7.0837 17.085L7.0837 10.7133C7.68556 10.5338 8.2134 10.1648 8.58871 9.66122C8.96402 9.15763 9.16675 8.54635 9.16675 7.91829C9.16675 7.29024 8.96402 6.67896 8.58871 6.17537C8.2134 5.67179 7.68556 5.3028 7.0837 5.12329V2.91829C7.0837 2.69728 6.9959 2.48532 6.83962 2.32904C6.68334 2.17276 6.47138 2.08496 6.25037 2.08496C6.02935 2.08496 5.81739 2.17276 5.66111 2.32904C5.50483 2.48532 5.41703 2.69728 5.41703 2.91829V5.12329C4.81518 5.3028 4.28734 5.67179 3.91203 6.17537C3.53672 6.67896 3.33398 7.29024 3.33398 7.91829C3.33398 8.54635 3.53672 9.15763 3.91203 9.66122C4.28734 10.1648 4.81518 10.5338 5.41703 10.7133ZM7.2897 7.22383C7.42706 7.42939 7.50037 7.67107 7.50037 7.91829C7.50037 8.24981 7.36867 8.56776 7.13425 8.80218C6.89983 9.0366 6.58189 9.16829 6.25037 9.16829C6.00314 9.16829 5.76147 9.09498 5.5559 8.95763C5.35034 8.82028 5.19013 8.62506 5.09552 8.39665C5.00091 8.16824 4.97615 7.91691 5.02439 7.67443C5.07262 7.43195 5.19167 7.20923 5.36648 7.03441C5.5413 6.85959 5.76403 6.74054 6.0065 6.69231C6.24898 6.64408 6.50031 6.66884 6.72872 6.76344C6.95713 6.85805 7.15235 7.01827 7.2897 7.22383ZM12.917 15.2966L12.917 17.085C12.917 17.306 13.0048 17.5179 13.1611 17.6742C13.3174 17.8305 13.5294 17.9183 13.7504 17.9183C13.9714 17.9183 14.1833 17.8305 14.3396 17.6742C14.4959 17.5179 14.5837 17.306 14.5837 17.085V15.2966C15.1856 15.1171 15.7134 14.7481 16.0887 14.2445C16.464 13.741 16.6667 13.1297 16.6667 12.5016C16.6667 11.8736 16.464 11.2623 16.0887 10.7587C15.7134 10.2551 15.1856 9.88613 14.5837 9.70663V2.91829C14.5837 2.69728 14.4959 2.48532 14.3396 2.32904C14.1833 2.17276 13.9714 2.08496 13.7504 2.08496C13.5294 2.08496 13.3174 2.17276 13.1611 2.32904C13.0048 2.48532 12.917 2.69728 12.917 2.91829V9.70663C12.3152 9.88613 11.7873 10.2551 11.412 10.7587C11.0367 11.2623 10.834 11.8736 10.834 12.5016C10.834 13.1297 11.0367 13.741 11.412 14.2445C11.7873 14.7481 12.3152 15.1171 12.917 15.2966ZM14.7897 11.8072C14.9271 12.0127 15.0004 12.2544 15.0004 12.5016C15.0004 12.8331 14.8687 13.1511 14.6342 13.3855C14.3998 13.6199 14.0819 13.7516 13.7504 13.7516C13.5031 13.7516 13.2615 13.6783 13.0559 13.541C12.8503 13.4036 12.6901 13.2084 12.5955 12.98C12.5009 12.7516 12.4762 12.5002 12.5244 12.2578C12.5726 12.0153 12.6917 11.7926 12.8665 11.6177C13.0413 11.4429 13.264 11.3239 13.5065 11.2756C13.749 11.2274 14.0003 11.2522 14.2287 11.3468C14.4571 11.4414 14.6524 11.6016 14.7897 11.8072Z"></path>
                                        </svg>
                                    </div>
                                </>
                            )}
                        </div>
                    </div>
                    {keyWord !== '' && <SearchListMobile items={filteredRestaurants} />}
                    {keyWord === '' && isRecentListVisible &&
                        <>
                            <div className="recent-search-list-header">
                                <span className="recent-search-list-header-title">Recent searches</span>
                                <button onClick={() => updateRecentSearches(user._id)} className="recent-search-list-header-btn">Clear</button>
                            </div>

                            {user.recentSearches.map((search, index) => {
                                return (
                                    <div onClick={() => setKeyWord(search)} key={search + index} className="recent-search-list-item">
                                        <div className="search-icon-container">
                                            <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                                                <path d="M23.384 21.6191L16.855 15.0901C19.8122 11.2028 19.2517 5.689 15.5728 2.47626C11.894 -0.736477 6.35493 -0.549369 2.90126 2.90431C-0.552421 6.35798 -0.739529 11.897 2.47321 15.5759C5.68595 19.2548 11.1997 19.8152 15.087 16.8581L21.616 23.3871C22.1078 23.8667 22.8923 23.8667 23.384 23.3871C23.8718 22.8987 23.8718 22.1075 23.384 21.6191ZM2.75002 9.50007C2.75002 5.77215 5.7721 2.75007 9.50002 2.75007C13.2279 2.75007 16.25 5.77215 16.25 9.50007C16.25 13.228 13.2279 16.2501 9.50002 16.2501C5.77393 16.2457 2.75443 13.2262 2.75002 9.50007Z"></path>
                                            </svg>
                                        </div>
                                        <span className="recent-search-list-term">{search}</span>
                                    </div>
                                )
                            })}
                        </>
                    }
                    {keyWord === '' && !isRecentListVisible &&
                        <>
                            <div className="search-tags">
                                {categories.map(category => {
                                    return (
                                        <span onClick={() => setKeyWord(category.title)} key={category._id} className="search-tag">
                                            {category.title}
                                        </span>
                                    )
                                })}
                                {categories.map(category => {
                                    return (
                                        <span onClick={() => setKeyWord(category.title)} key={category._id + '1'} className="search-tag">
                                            {category.title}
                                        </span>
                                    )
                                })}
                            </div>
                            <span className="recent-orders-title">My recent orders</span>
                            <div className="recent-orders-container">
                                <SearchListMobile items={restaurants.filter(restaurant => user.recentOrders.includes(restaurant._id))} />
                                <SearchListMobile items={restaurants.filter(restaurant => user.recentOrders.includes(restaurant._id))} />
                                <SearchListMobile items={restaurants.filter(restaurant => user.recentOrders.includes(restaurant._id))} />
                            </div>
                            <div style={{ height: '55px' }}></div>
                        </>
                    }
                </div>}
        </>
    )
}