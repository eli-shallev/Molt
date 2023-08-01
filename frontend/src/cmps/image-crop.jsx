import { useState } from 'react'
import ReactCrop from 'react-image-crop'
import 'react-image-crop/src/ReactCrop.scss'
import { updateUserImgUrl } from '../store/user/user.action'

export function ImageCrop({ imgUrl, user, setImgUrlToUpdate, onImgInput }) {

    const [crop, setCrop] = useState()
    const [image, setImage] = useState(null)

    function setDefualtState() {
        const crop = {
            unit: 'px',
            x: image?.width / 2 - 40,
            y: image?.height / 2 - 40,
            width: 80,
            height: 80
        }
        setCrop(crop)
    }

    const cropImageNow = () => {
        const canvas = document.createElement('canvas')
        const scaleX = image.naturalWidth / image.width
        const scaleY = image.naturalHeight / image.height
        canvas.width = crop.width
        canvas.height = crop.height
        const ctx = canvas.getContext('2d')

        const pixelRatio = window.devicePixelRatio
        canvas.width = crop.width * pixelRatio
        canvas.height = crop.height * pixelRatio
        ctx.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0)
        ctx.imageSmoothingQuality = 'high'
        ctx.drawImage(
            image,
            crop.x * scaleX,
            crop.y * scaleY,
            crop.width * scaleX,
            crop.height * scaleY,
            0,
            0,
            crop.width,
            crop.height,
        )

        const base64Image = canvas.toDataURL('image/jpeg')
        updateUserImgUrl(user._id, base64Image)
        setImgUrlToUpdate(null)
    }

    return (
        <div className="image-crop">
            <ReactCrop aspect={1} crop={crop} onChange={c => setCrop(c)}>
                <img onLoad={setDefualtState} crossOrigin="anonymous" ref={(node) => setImage(node)} src={imgUrl} />
            </ReactCrop>

            <label className="change-image">
                Choose a different picture
                <input style={{ display: 'none' }} type="file" onInput={onImgInput} />
            </label>

            <div className="btns-container">
                <button className="btn-cancel" onClick={() => setImgUrlToUpdate(null)}>Cancel</button>
                <button className='btn-save-image' onClick={cropImageNow}>Save profile picture</button>
            </div>
        </div>
    )
}