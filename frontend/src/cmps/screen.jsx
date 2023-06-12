import { useRef } from "react"
import { useSelector } from "react-redux"

export function Screen() {
    const inputRef = useRef()
    const isScreen = useSelector((storeState) => storeState.restaurantModule.isScreen)
    if (!isScreen) return <div></div>

    function handleClick() {
        inputRef.current.focus()
    }

    return (
        <div onClick={handleClick} className="screen">
            <input ref={inputRef} type="text"/>
        </div>
    )
}