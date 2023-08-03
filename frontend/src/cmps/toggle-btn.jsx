import { useState } from "react"

export function ToggleBtn({ initState, onToggle }) {
    const [toggleState, setToggleState] = useState(initState)

    function handleToggle() {
        onToggle(!toggleState)
        setToggleState(prevState => !prevState)
    }

    return (
        <div className={`toggle-btn ${toggleState ? 'right' : 'left'}`} onClick={handleToggle}>

            <div className="opt opt-left"> YES</div>

            <div className="opt opt-right">No</div>

            <div className={'tumb'} >
                <svg viewBox="0 0 16 21" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" style={{ width: "16px" }}><defs><path d="M20 14.5a.5.5 0 00-.5-.5H.5a.5.5 0 100 1h19a.5.5 0 00.5-.5m0-14a.5.5 0 00-.5-.5H.5a.5.5 0 100 1h19a.5.5 0 00.5-.5M19.5 8H.5a.5.5 0 010-1h19a.5.5 0 110 1" id="ic_m_menu_svg__a"></path></defs><g fill="none" fillRule="evenodd" opacity="0.9"><path d="M20-1v24H-4V-1z"></path><path d="M1 20.5a.5.5 0 00.5-.5V1a.5.5 0 10-1 0v19a.5.5 0 00.5.5m14 0a.5.5 0 00.5-.5V1a.5.5 0 10-1 0v19a.5.5 0 00.5.5M7.5 20V1a.5.5 0 011 0v19a.5.5 0 11-1 0" fill="#FFF" fillRule="nonzero"></path><g transform="rotate(90 7.5 8)"><mask id="ic_m_menu_svg__b" fill="#fff"><use xlinkHref="#ic_m_menu_svg__a"></use></mask><g mask="url(#ic_m_menu_svg__b)" fill="#212025" fillOpacity="0.12" fillRule="nonzero"><path d="M22-4v24H-2V-4z"></path></g></g></g></svg>
            </div>
        </div>
    )
}