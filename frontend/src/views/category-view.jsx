import { useLocation, useNavigate } from "react-router-dom";
import { FilterMapBtns } from "../cmps/filter-map-btns";
import { HeaderDesktop } from "../cmps/header-desktop";
import { HeaderMobile } from "../cmps/header-mobile";
import { HiArrowNarrowLeft } from 'react-icons/hi';
import { FullList } from "../cmps/full-list";

export function CategoryView() {
    const { state } = useLocation()
    const navigate = useNavigate()

    return (
        <>
            <HeaderDesktop />
            <HeaderMobile title={state.title} />
            <FilterMapBtns />
            <div className="category-view">
                <div onClick={() => navigate(-1)} className="category-view-back-btn">
                    <HiArrowNarrowLeft />
                </div>
                <FullList title={state.title} items={state.items} type={state.type} />
            </div>
        </>
    )
}