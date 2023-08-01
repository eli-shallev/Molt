import { useEffect, useState } from 'react';

import { VscHome } from 'react-icons/vsc';
import { BiChevronDown } from 'react-icons/bi';
import { HeaderSearch } from './header-search';
import { useSelector } from 'react-redux';
import { useLocation, useNavigate } from 'react-router-dom';

export function HeaderDesktop() {
    const user = useSelector((storeState) => storeState.userModule.user)
    const [scrollY, setScrollY] = useState()
    const navigate = useNavigate()
    const location = useLocation()

    function handleScroll() {
        setScrollY(window.scrollY)
    }

    useEffect(() => {
        handleScroll()
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [window.scrollY])

    return (
        <div className={`header-desktop-container main-layout full  ${location.pathname.substring(1, 16) === 'profile-desktop' ? 'min-version' : ''}`}>
            <header className="header-desktop">
                <div className="header-left">
                    <img onClick={()=> navigate('/')} src={require("../assets/images/molt-b&w-logo.png")} alt="Molt logo" className="header-logo" />
                    <div className={`header-delivery ${scrollY > 100 ? 'scrolled' : ''}`}>
                        <div className="header-adderss-label">
                            <VscHome />
                        </div>
                        <div className="header-adderss-info">
                            <span className='header-address-const'>Delivery to</span>
                            <span className='header-adderss-title'>Home (סמטת היין 9)</span>
                        </div>
                        <div className="header-address-btn">
                            <BiChevronDown />
                        </div>
                    </div>
                </div>

                <div className="header-middle">
                    <HeaderSearch />
                </div>

                <div className="header-right">
                    <div onClick={() => navigate('/profile-desktop')} className="header-user-btn">
                        <div className="header-user-img-container">
                            <img src={user.imgUrl} alt="" />
                        </div>
                        <BiChevronDown />
                    </div>
                </div>
            </header>
        </div>
    )
}