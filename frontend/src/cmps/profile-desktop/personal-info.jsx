import { useOutletContext } from "react-router-dom"
import { uploadService } from "../../services/upload.service"
import { useEffect, useState } from "react"
import { Screen } from "../screen"
import { ImageCrop } from "../image-crop"
import { UserImageSelection } from "../user-image-selection"
import { store } from "../../store/store"
import { FavouriteList } from "../favourite-list"
import { OrderAgainList } from "../order-again-list"

export function PersonalInfo() {
    const [imgUrlToUpdate, setImgUrlToUpdate] = useState('')
    const user = useOutletContext()

    useEffect(() => {
        if (imgUrlToUpdate) {
            store.dispatch({ type: 'SET_IS_SCREEN', isScreen: true })
        } else {
            store.dispatch({ type: 'SET_IS_SCREEN', isScreen: false })
        }
    }, [imgUrlToUpdate])

    async function onImgInput(ev) {
        const imageFile = ev.target.files[0]

        if (imageFile) {
            const reader = new FileReader()
            reader.readAsDataURL(imageFile)
            reader.addEventListener('load', () => {
                setImgUrlToUpdate(prev => reader.result)
            })
        } else {
            console.log('had problem reading file') // add user massege
        }
    }
    return (
        <>
            <div className="personal-info">
                <div className="personal-info-content">
                    <div className="personal-info-img">
                        <div className="img-container">
                            <img src={user.imgUrl} alt="" />
                        </div>
                        <label className="btn-edit-img">
                            Edit
                            <input style={{ display: 'none' }} type="file" onInput={onImgInput} />
                        </label>
                    </div>
                    <div className="personal-info-data">
                        <div className="data-header">
                            <span>{user.fullname}</span>
                        </div>
                        <div className="data-body">
                            <div className="email">
                                <span className="title">Email</span>
                                <span className="info">{user.email}</span>
                            </div>
                            <div className="phone">
                                <span className="title">Phone number</span>
                                <span className="info">{user.phoneNumber}</span>
                            </div>
                        </div>
                    </div>
                </div>
                <FavouriteList favList={user.favorites} />
                <OrderAgainList list ={user.recentOrders}/>
            </div>
            {imgUrlToUpdate && (
                <>
                    <UserImageSelection imgUrl={imgUrlToUpdate} setImgUrlToUpdate={setImgUrlToUpdate} onImgInput={onImgInput} user={user} />
                </>
            )}
        </>
    )
}