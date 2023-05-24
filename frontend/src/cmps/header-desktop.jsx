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
                        <FiSearch />
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