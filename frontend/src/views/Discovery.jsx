
import { useSelector } from "react-redux"
import { Loader } from "../cmps/loader"

export function Discovery() {
    const restaurants = useSelector((storeState) => storeState.restaurantModule.restaurants)
    const isLoading = useSelector((storeState) => storeState.restaurantModule.isLoading)

    return (
        <div className="discovery">
            
            {isLoading && <Loader/>}
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