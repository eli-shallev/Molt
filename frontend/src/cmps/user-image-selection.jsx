import { useEffect, useRef, useState } from "react";
import { ImageCrop } from "./image-crop";

export function UserImageSelection({ imgUrl, user, setImgUrlToUpdate, onImgInput }) {
    const ref = useRef()
    const [timeoutId, setTimeoutId] = useState(null)

    useEffect(() => {
        (ref.current).focus()
    })

    function handleBlur(ev) {
        if (!timeoutId) {
            const idToSet = setTimeout(() => {
                if (!ev.relatedTarget) setImgUrlToUpdate(null)
                setTimeoutId(null)
            }, 200)
            setTimeoutId(idToSet)
        }
    }

    return (
        <div ref={ref} tabIndex={0} onBlur={handleBlur} className="user-image-selection">
            <div className="user-image-selection-header">
                <span className="header-title">
                    Crop your profile picture
                </span>
                <button onClick={() => setImgUrlToUpdate(null)} className="close-btn">
                    <div className="close-svg-container">
                        <svg viewBox="0 0 24 24" fill="currentColor">
                            <path d="M2.44 19.44a1.5 1.5 0 002.121 2.121l7.262-7.26a.25.25 0 01.354 0l7.262 7.262a1.5 1.5 0 102.122-2.12l-7.26-7.266a.25.25 0 010-.354l7.262-7.262a1.5 1.5 0 00-2.124-2.12L12.177 9.7a.25.25 0 01-.354 0L4.561 2.44A1.5 1.5 0 002.44 4.56L9.7 11.823a.25.25 0 010 .354L2.44 19.44z"></path>
                        </svg>
                    </div>
                </button>
            </div>

            <ImageCrop imgUrl={imgUrl} user={user} setImgUrlToUpdate={setImgUrlToUpdate} onImgInput={onImgInput} />
        </div>
    )
}