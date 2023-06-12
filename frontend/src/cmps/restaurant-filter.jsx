import { useEffect, useRef, useState } from "react"

export function RestaurantFilter({ setIsFilterOpen, isFilterOpen, restaurants, categories }) {

    const [filterBy, setFilterBy] = useState({ categories: [], priceLevels: [], sortBy: 'recommended' })
    const [filterFullMode, setFilterFullMode] = useState(false)
    const [isScrollTop, setIsScrollTop] = useState(true)
    const [isScrollBottom, setIsScrollBottom] = useState(true)


    const filterRef = useRef()

    useEffect(() => {
        filterRef.current.focus()
        filterRef.current.addEventListener("scroll", onScroll)
    }, [])

    function handlePriceLevelChange(priceLevelToSet) {
        let index = filterBy.priceLevels.findIndex(priceLevel => priceLevel === priceLevelToSet)
        if (index !== -1) {
            filterBy.priceLevels.splice(index, 1)
        }
        else {
            filterBy.priceLevels.push(priceLevelToSet)
        }
        setFilterBy(prevFilter => ({ ...prevFilter }))
    }

    const handleCategoryChange = (categoryId) => {
        let index = filterBy.categories.findIndex(category => category === categoryId)
        if (index !== -1) {
            filterBy.categories.splice(index, 1)
        }
        else {
            filterBy.categories.push(categoryId)
        }
        setFilterBy(prevFilter => ({ ...prevFilter }))
    }

    function onScroll(event) {
        const { scrollTop, scrollHeight, clientHeight } = filterRef.current
        if (scrollTop === 0) setIsScrollTop(true)
        else setIsScrollTop(false)

        if (scrollHeight - scrollTop - clientHeight <= 5) setIsScrollBottom(true)
        else setIsScrollBottom(false)
    }

    function closeFilter() {
        filterRef.current.removeEventListener("scroll", onScroll)
        setIsFilterOpen(false)
    }

    function handleBlur(ev) {
        if (!ev.relatedTarget) closeFilter()
    }

    return (
        <div onBlur={handleBlur} ref={filterRef} tabIndex="0" className={`restaurant-filter ${isFilterOpen ? 'open' : ''}`}>
            <div className={`restaurant-filter-header ${isScrollTop ? 'top' : ''}`}>
                <button onClick={closeFilter} className="close-btn">
                    <div className="close-svg-container">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2.44 19.44a1.5 1.5 0 002.121 2.121l7.262-7.26a.25.25 0 01.354 0l7.262 7.262a1.5 1.5 0 102.122-2.12l-7.26-7.266a.25.25 0 010-.354l7.262-7.262a1.5 1.5 0 00-2.124-2.12L12.177 9.7a.25.25 0 01-.354 0L4.561 2.44A1.5 1.5 0 002.44 4.56L9.7 11.823a.25.25 0 010 .354L2.44 19.44z"></path>
                        </svg>
                    </div>
                </button>
                <span>Filter</span>
            </div>

            <div className="filter-container">
                <span className="filter-title">Filter</span>
                <div className={`filter-body ${filterFullMode ? 'open' : ''}`}>
                    <div className={`filter-content ${filterFullMode ? 'open' : ''}`}>
                        <div className="filter-content-separator"></div>
                        <div className="filter-tags-container">
                            {categories.map(category => {
                                return (
                                    <span key={category._id} className={`filter-tag ${filterBy.categories.includes(category._id) ? 'active' : ''}`}
                                        onClick={() => handleCategoryChange(category._id)}>
                                        {category.title}
                                    </span>
                                )
                            })}
                            {categories.map((category, index) => {
                                if (index === 0) return
                                return (
                                    <span key={category._id + 1} className={`filter-tag ${filterBy.categories.includes(category._id) ? 'active' : ''}`}
                                        onClick={() => handleCategoryChange(category._id)}>
                                        {category.title}
                                    </span>
                                )
                            })}
                            {categories.map(category => {
                                return (
                                    <span key={category._id + 2} className={`filter-tag ${filterBy.categories.includes(category._id) ? 'active' : ''}`}
                                        onClick={() => handleCategoryChange(category._id)}>
                                        {category.title}
                                    </span>
                                )
                            })}
                            {categories.map(category => {
                                return (
                                    <span key={category._id + 2} className={`filter-tag ${filterBy.categories.includes(category._id) ? 'active' : ''}`}
                                        onClick={() => handleCategoryChange(category._id)}>
                                        {category.title}
                                    </span>
                                )
                            })}
                            {categories.map(category => {
                                return (
                                    <span key={category._id + 2} className={`filter-tag ${filterBy.categories.includes(category._id) ? 'active' : ''}`}
                                        onClick={() => handleCategoryChange(category._id)}>
                                        {category.title}
                                    </span>
                                )
                            })}
                            {categories.map(category => {
                                return (
                                    <span key={category._id + 2} className={`filter-tag ${filterBy.categories.includes(category._id) ? 'active' : ''}`}
                                        onClick={() => handleCategoryChange(category._id)}>
                                        {category.title}
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                    <div className={`filter-footer ${filterFullMode ? 'hide' : ''}`}>
                        <div className="filter-separator"></div>
                        <button onClick={() => setFilterFullMode(true)} className="filter-full-btn">
                            <svg width="12" height="12" viewBox="0 0 12 12">
                                <path fillRule="evenodd" clipRule="evenodd" d="M0 6C0 9.31371 2.68629 12 6 12C9.31371 12 12 9.31371 12 6C12 2.68629 9.31371 0 6 0C2.68778 0.00358242 0.003582 2.68778 0 6ZM5.375 3.625C5.375 3.21079 5.71079 2.875 6.125 2.875C6.53921 2.875 6.875 3.21079 6.875 3.625V5.25H8.5C8.91421 5.25 9.25 5.58579 9.25 6C9.25 6.41421 8.91421 6.75 8.5 6.75H6.875L6.875 8.375C6.875 8.78921 6.53921 9.125 6.125 9.125C5.71079 9.125 5.375 8.78921 5.375 8.375L5.375 6.75L3.75 6.75C3.33579 6.75 3 6.41421 3 6C3 5.58579 3.33579 5.25 3.75 5.25L5.375 5.25V3.625Z" fill="#009DE0"></path>
                            </svg>

                            <span>
                                See all filters
                            </span>
                        </button>
                    </div>
                </div>
            </div>

            <div className="price-container">
                <span className="price-title">Price</span>
                <div className="price-content">
                    {['$', '$$', '$$$', '$$$$'].map((priceLevel, index) =>
                        <span key={index}
                            className={`price-tag ${filterBy?.priceLevels.includes(index + 1) ? 'active' : ''}`}
                            onClick={() => handlePriceLevelChange(index + 1)}
                        >
                            {priceLevel}
                        </span>)}
                </div>
            </div>

            <div className="sort-container">
                <span className="sort-title">Sort by</span>
                <div className="sort-content">
                    <div className="sort-content-separator"></div>
                    <span
                        className={`sort-tag ${filterBy?.sortBy === 'recommended' ? 'active' : ''}`}
                        onClick={() => setFilterBy(prevFilter => ({ ...prevFilter, sortBy: 'recommended' }))}>
                        Recommended
                    </span>
                    <span
                        className={`sort-tag ${filterBy?.sortBy === 'delivery-price' ? 'active' : ''}`}
                        onClick={() => setFilterBy(prevFilter => ({ ...prevFilter, sortBy: 'delivery-price' }))}>
                        Delivery price
                    </span>
                    <span
                        className={`sort-tag ${filterBy?.sortBy === 'rating' ? 'active' : ''}`}
                        onClick={() => setFilterBy(prevFilter => ({ ...prevFilter, sortBy: 'rating' }))}>
                        Rating
                    </span>
                    <span
                        className={`sort-tag ${filterBy?.sortBy === 'delivery-time' ? 'active' : ''}`}
                        onClick={() => setFilterBy(prevFilter => ({ ...prevFilter, sortBy: 'delivery-time' }))}>
                        Delivery time
                    </span>
                    <span
                        className={`sort-tag ${filterBy?.sortBy === 'distance' ? 'active' : ''}`}
                        onClick={() => setFilterBy(prevFilter => ({ ...prevFilter, sortBy: 'distance' }))}>
                        Distance
                    </span>
                </div>
            </div>

            <div className={`filter-action-btn-container ${isScrollBottom ? 'bottom' : ''}`}>
                <button className="filter-action-btn">
                    Apply
                </button>
            </div>
        </div>
    )
}