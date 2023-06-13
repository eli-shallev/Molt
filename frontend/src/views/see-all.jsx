import { useLocation, useNavigate } from "react-router-dom";
import { FullList } from "../cmps/full-list";
import { HeaderMobile } from "../cmps/header-mobile";
import { HiArrowNarrowLeft } from 'react-icons/hi';

export function SeeAll() {
    const { state } = useLocation()
    const navigate = useNavigate()
    return (
        <>
            <HeaderMobile title={state.title} />
            <div className="see-all">
                <div onClick={() => navigate(-1)} className="see-all-back-btn">
                    <HiArrowNarrowLeft />
                </div>
                <FullList title={state.title} items={state.items} type={state.type} />
            </div>
        </>
    )
} 