import { FiSearch } from 'react-icons/fi';
import { VscHome } from 'react-icons/vsc';
import { BiChevronDown } from 'react-icons/bi';
import { useEffect, useState } from 'react';



export function HeaderDesktop() {

    const [scrollY, setScrollY] = useState()

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
        <div className="header-desktop-container main-layout full">
            <header className="header-desktop">
                <div className="header-left">
                    <img src={require("../assets/images/molt-b&w-logo.png")} alt="Molt logo" className="header-logo" />
                    <div className={scrollY > 100 ? 'header-delivery scrolled' : 'header-delivery'}>
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
                    <div className="header-search">
                        <div className="search-icon-container">
                            <svg viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
                                <path d="M23.384 21.6191L16.855 15.0901C19.8122 11.2028 19.2517 5.689 15.5728 2.47626C11.894 -0.736477 6.35493 -0.549369 2.90126 2.90431C-0.552421 6.35798 -0.739529 11.897 2.47321 15.5759C5.68595 19.2548 11.1997 19.8152 15.087 16.8581L21.616 23.3871C22.1078 23.8667 22.8923 23.8667 23.384 23.3871C23.8718 22.8987 23.8718 22.1075 23.384 21.6191ZM2.75002 9.50007C2.75002 5.77215 5.7721 2.75007 9.50002 2.75007C13.2279 2.75007 16.25 5.77215 16.25 9.50007C16.25 13.228 13.2279 16.2501 9.50002 16.2501C5.77393 16.2457 2.75443 13.2262 2.75002 9.50007Z"></path>
                            </svg>
                        </div>
                        <input
                            type="text"
                            placeholder='Search in Molt...' />
                    </div>
                </div>

                <div className="header-right">
                    <div className="header-user-btn">
                        <div className="header-user-img-container">
                            <img src="https://api.multiavatar.com/user.png" alt="" />
                        </div>
                        <BiChevronDown />
                    </div>
                </div>
            </header>
        </div>

    )
}