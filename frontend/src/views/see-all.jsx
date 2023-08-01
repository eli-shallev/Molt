import { useLocation, useNavigate } from "react-router-dom";

import { FullList } from "../cmps/full-list";
import { HeaderMobile } from "../cmps/header-mobile";

import { HiArrowNarrowLeft } from 'react-icons/hi';
import { NavBar } from "../cmps/nav-bar";
import { HeaderDesktop } from "../cmps/header-desktop";

export function SeeAll() {
    const { state } = useLocation()
    const navigate = useNavigate()
    return (
        <>
            <HeaderMobile title={state.title} />
            <HeaderDesktop />
            <NavBar />
            <div className="see-all">
                {!state.wideScreen && (
                    <div onClick={() => navigate(-1)} className="see-all-back-btn">
                        <HiArrowNarrowLeft />
                    </div>
                )}
                <FullList title={state.title} items={state.items} type={state.type} />
            </div>
        </>
    )
} 