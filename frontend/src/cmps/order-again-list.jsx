import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { RestaurantPreview } from "./restaurant-preview"

export function OrderAgainList({list}) {

    const restaurants = useSelector((storeState) => storeState.restaurantModule.restaurants)
    const [listToDisplay, setListToDisplay] = useState([])

    useEffect(() => {
        const listToSet = restaurants.filter(res => list.includes(res._id))
        setListToDisplay(listToSet)
    }, [])

    function placeHolders() {
        const placeHolders = []
        for (let index = 1; index <= 3 - listToDisplay?.length; index++) {
            placeHolders.push(<img src={require(`../assets/images/place-holder${index}.png`)} alt="" />)
        }
        return placeHolders
    }

    return (
        <div className="order-again-list">
            <span className="order-again-list-title">
                Order again
            </span>

            <div className="order-again-list-content">
                {listToDisplay.map(item => {
                    return (
                        <RestaurantPreview key={item._id} restaurant={item} />
                    )
                })}

                {placeHolders().map((img,idx) => {
                    return (
                        <div key={idx} className="img-container">
                            {img}
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}