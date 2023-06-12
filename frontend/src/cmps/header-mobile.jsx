import { useEffect, useState } from 'react';
import { BiChevronDown } from 'react-icons/bi';
import { useLocation } from 'react-router-dom';

export function HeaderMobile() {
    const [isScrollTop, setIsScrollTop] = useState(true)
    const location = useLocation()

    useEffect(() => {
        document.addEventListener("scroll", onScroll)

        return document.removeEventListener('scrool', onScroll)
    }, [])

    function onScroll(event) {
        if (event.target.scrollingElement.scrollTop === 0) setIsScrollTop(true)
        else setIsScrollTop(false)
    }
    
    return (
        <div className={`header-mobile ${isScrollTop ? 'top' : ''}`}>
            <div className="header-mobile-top-view">
                <div className="location-icon-container">
                    <img src={require("../assets/images/icons-home-location.png")} alt="home location icon" className="header-location-icon" />
                </div>
                <span className="location-title">
                    סמטת היין 9
                </span>
                <div className="header-address-btn">
                    <BiChevronDown />
                </div>
            </div>

            <div className="header-mobile-scroll-view">
                <span className="header-mobile-title">
                    {location.pathname.substring(1)}
                </span>
                <div className="location-container">
                    <span className="location-title">
                        סמטת היין 9
                    </span>
                    <div className="header-address-btn">
                        <BiChevronDown />
                    </div>
                </div>
            </div>
        </div>
    )
}