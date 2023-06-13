
import { useSelector } from "react-redux"
import { Loader } from "../cmps/loader"
import { DiscoverySlideBar } from "../cmps/discovery-slide-bar"
import { HeaderDesktop } from "../cmps/header-desktop"
import { HeaderMobile } from "../cmps/header-mobile"

export function Discovery() {
    const restaurants = useSelector((storeState) => storeState.restaurantModule.restaurants)
    const isLoading = useSelector((storeState) => storeState.restaurantModule.isLoading)

    return (
        <>
            <HeaderDesktop />
            <HeaderMobile />
            {isLoading && <Loader />}
            {!isLoading &&
                (
                    <div className="discovery">
                        <DiscoverySlideBar />
                    </div>
                )}
        </>
    )
}