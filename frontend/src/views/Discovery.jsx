import { useEffect } from "react"
import { loadRestaurants } from "../store/restaurant/restaurant.action"
import { useSelector } from "react-redux"

export function Discovery() {
    const restaurants = useSelector((storeState) => storeState.restaurantModule.restaurants)
    const isLoading = useSelector((storeState) => storeState.restaurantModule.isLoading)
    useEffect(() => {
        loadRestaurants()
    }, [])
    return (
        <div className="discovery">
            
            {isLoading && <span>loading...</span>}
            {(!isLoading && restaurants) && (
                <ul>
                    {restaurants.map(restaurant => {
                        return (
                            <li key = {restaurant._id}>
                                {restaurant.title}
                            </li>
                        )
                    })}
                </ul>
            )}
        </div>
    )
}