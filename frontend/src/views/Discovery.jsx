import { useSelector } from "react-redux"

import { Loader } from "../cmps/loader"
import { DiscoverySlideBar } from "../cmps/discovery-slide-bar"
import { HeaderDesktop } from "../cmps/header-desktop"
import { HeaderMobile } from "../cmps/header-mobile"

export function Discovery() {
    const isLoading = useSelector((storeState) => storeState.restaurantModule.isLoading)

    return (
        <>
            <HeaderDesktop />
            <HeaderMobile />
            {isLoading && <Loader />}
            {!isLoading &&
                (
                    <div className="discovery">
                         <img src={require("../assets/images/dicovery-head.png")} alt="dicovery-head" className="dicovery-head-background" />
                        <DiscoverySlideBar />
                    </div>
                )}
        </>
    )
}