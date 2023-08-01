import { Outlet } from "react-router-dom";
import { HeaderDesktop } from "../cmps/header-desktop";
import { useSelector } from "react-redux";

export function ProfileDesktop() {
    const user = useSelector((storeState) => storeState.userModule.user)
    return (
        <>
            <HeaderDesktop />
            <div className="profile-desktop">
                <div className="profile-desktop-menu">
                    <div className="profile-desktop-menu-header">
                        <span className="menu-header-title">
                            Profile
                        </span>
                    </div>
                    <div className="profile-desktop-menu-content">
                        <a href="/#/profile-desktop/personal-info" className="profile-desktop-menu-item">
                            Presonal info
                        </a>
                        <a href="/#/profile-desktop/payment-methods" className="profile-desktop-menu-item">
                            Payment methods
                        </a>
                        <a href="/#/profile-desktop/addresses" className="profile-desktop-menu-item">
                            Addresses
                        </a>
                        <a href="/#/profile-desktop/order-history" className="profile-desktop-menu-item">
                            Order history
                        </a>
                        <a href="/#/profile-desktop/settings" className="profile-desktop-menu-item">
                            Settings
                        </a>
                    </div>
                </div>

                <Outlet context={user} />
            </div>
        </>
    )
}