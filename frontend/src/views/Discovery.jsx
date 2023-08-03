import { useSelector } from "react-redux"

import { Loader } from "../cmps/loader"
import { DiscoverySlideBar } from "../cmps/discovery-slide-bar"
import { HeaderDesktop } from "../cmps/header-desktop"
import { HeaderMobile } from "../cmps/header-mobile"
import { NavBar } from "../cmps/nav-bar"
import { showUserMsg } from "../services/event-bus.service"

export function Discovery() {
    const isLoading = useSelector((storeState) => storeState.restaurantModule.isLoading)

    return (
        <>
            <HeaderDesktop />
            <HeaderMobile />
            <NavBar/>
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