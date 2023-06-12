import { useSelector } from "react-redux";
import { SlideList } from "../cmps/slide-list";
import { Loader } from "../cmps/loader";
import { FullList } from "../cmps/full-list";
import { RestaurantFilter } from "../cmps/restaurant-filter";
import { useEffect, useState } from "react";
import { store } from "../store/store";
import { SET_IS_SCREEN } from "../store/restaurant/restaurant.reducer";
import { FilterMapBtns } from "../cmps/filter-map-btns";

export function Restaurants() {
    const restaurants = useSelector((storeState) => storeState.restaurantModule.restaurants)
    const categories = useSelector((storeState) => storeState.categoryModule.categories)
    const isLoading = useSelector((storeState) => storeState.restaurantModule.isLoading)
    const [isFilterOpen, setIsFilterOpen] = useState(false)

    useEffect(() => {
        store.dispatch({ type: SET_IS_SCREEN, isScreen: isFilterOpen })
    }, [isFilterOpen])

    return (
        <>
            {isLoading && <Loader />}
            {!isLoading &&
                (<div className="restaurants">
                    <FilterMapBtns setIsFilterOpen={setIsFilterOpen} />
                    <div className="restauranst-title-container">
                        <span className="restaurants-title">
                            Restaurants <span className="restaurants-title-tail">near me</span>
                        </span>
                        <div onClick={() => { setIsFilterOpen(true) }} className="fillter-container">
                            <span className="fillter-title">Sorted by <strong>Recommended</strong></span>
                            <div className="fillter-icon-container">
                                <svg viewBox="0 0 20 21" fill="currentColor" >
                                    <path fillRule="evenodd" clipRule="evenodd" d="M5.41703 10.7133V17.085C5.41703 17.306 5.50483 17.5179 5.66111 17.6742C5.81739 17.8305 6.02935 17.9183 6.25037 17.9183C6.47138 17.9183 6.68334 17.8305 6.83962 17.6742C6.9959 17.5179 7.0837 17.306 7.0837 17.085L7.0837 10.7133C7.68556 10.5338 8.2134 10.1648 8.58871 9.66122C8.96402 9.15763 9.16675 8.54635 9.16675 7.91829C9.16675 7.29024 8.96402 6.67896 8.58871 6.17537C8.2134 5.67179 7.68556 5.3028 7.0837 5.12329V2.91829C7.0837 2.69728 6.9959 2.48532 6.83962 2.32904C6.68334 2.17276 6.47138 2.08496 6.25037 2.08496C6.02935 2.08496 5.81739 2.17276 5.66111 2.32904C5.50483 2.48532 5.41703 2.69728 5.41703 2.91829V5.12329C4.81518 5.3028 4.28734 5.67179 3.91203 6.17537C3.53672 6.67896 3.33398 7.29024 3.33398 7.91829C3.33398 8.54635 3.53672 9.15763 3.91203 9.66122C4.28734 10.1648 4.81518 10.5338 5.41703 10.7133ZM7.2897 7.22383C7.42706 7.42939 7.50037 7.67107 7.50037 7.91829C7.50037 8.24981 7.36867 8.56776 7.13425 8.80218C6.89983 9.0366 6.58189 9.16829 6.25037 9.16829C6.00314 9.16829 5.76147 9.09498 5.5559 8.95763C5.35034 8.82028 5.19013 8.62506 5.09552 8.39665C5.00091 8.16824 4.97615 7.91691 5.02439 7.67443C5.07262 7.43195 5.19167 7.20923 5.36648 7.03441C5.5413 6.85959 5.76403 6.74054 6.0065 6.69231C6.24898 6.64408 6.50031 6.66884 6.72872 6.76344C6.95713 6.85805 7.15235 7.01827 7.2897 7.22383ZM12.917 15.2966L12.917 17.085C12.917 17.306 13.0048 17.5179 13.1611 17.6742C13.3174 17.8305 13.5294 17.9183 13.7504 17.9183C13.9714 17.9183 14.1833 17.8305 14.3396 17.6742C14.4959 17.5179 14.5837 17.306 14.5837 17.085V15.2966C15.1856 15.1171 15.7134 14.7481 16.0887 14.2445C16.464 13.741 16.6667 13.1297 16.6667 12.5016C16.6667 11.8736 16.464 11.2623 16.0887 10.7587C15.7134 10.2551 15.1856 9.88613 14.5837 9.70663V2.91829C14.5837 2.69728 14.4959 2.48532 14.3396 2.32904C14.1833 2.17276 13.9714 2.08496 13.7504 2.08496C13.5294 2.08496 13.3174 2.17276 13.1611 2.32904C13.0048 2.48532 12.917 2.69728 12.917 2.91829V9.70663C12.3152 9.88613 11.7873 10.2551 11.412 10.7587C11.0367 11.2623 10.834 11.8736 10.834 12.5016C10.834 13.1297 11.0367 13.741 11.412 14.2445C11.7873 14.7481 12.3152 15.1171 12.917 15.2966ZM14.7897 11.8072C14.9271 12.0127 15.0004 12.2544 15.0004 12.5016C15.0004 12.8331 14.8687 13.1511 14.6342 13.3855C14.3998 13.6199 14.0819 13.7516 13.7504 13.7516C13.5031 13.7516 13.2615 13.6783 13.0559 13.541C12.8503 13.4036 12.6901 13.2084 12.5955 12.98C12.5009 12.7516 12.4762 12.5002 12.5244 12.2578C12.5726 12.0153 12.6917 11.7926 12.8665 11.6177C13.0413 11.4429 13.264 11.3239 13.5065 11.2756C13.749 11.2274 14.0003 11.2522 14.2287 11.3468C14.4571 11.4414 14.6524 11.6016 14.7897 11.8072Z"></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <SlideList title='I fell like eating..' items={categories} type='category' />
                    <FullList title='All restaurants' items={restaurants} type='restaurant' />
                    {isFilterOpen && (
                        <RestaurantFilter
                            isFilterOpen={isFilterOpen}
                            setIsFilterOpen={setIsFilterOpen}
                            restaurants={restaurants}
                            categories={categories}
                        />
                    )}
                </div>)}
        </>
    )
}