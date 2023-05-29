
import { useSelector } from "react-redux"
import { Loader } from "../cmps/loader"
import { DiscoverySlideBar } from "../cmps/discovery-slide-bar"

export function Discovery() {
    const restaurants = useSelector((storeState) => storeState.restaurantModule.restaurants)
    const isLoading = useSelector((storeState) => storeState.restaurantModule.isLoading)

    return (
        <>
            {isLoading && <Loader />}
            {!isLoading &&
                (
                    <div className="discovery">
                        <DiscoverySlideBar/>
                    </div>
                )}
        </>
    )
}