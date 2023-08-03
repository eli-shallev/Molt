import { useSelector } from "react-redux"
import { RestaurantPreview } from "./restaurant-preview"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"

export function FavouriteList({ favList }) {
    const restaurants = useSelector((storeState) => storeState.restaurantModule.restaurants)
    const [listToDisplay, setListToDisplay] = useState([])
    const navigate = useNavigate()

    useEffect(() => {
        const listToSet = restaurants.filter(res => favList.includes(res._id))
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
        <div className="favourite-list">

            {(!favList || !favList.length) &&
                <div className="empty-list">
                    <div className="left">
                        <span className="favourite-list-title">
                            Your favorites
                        </span>
                        <p className="favourite-list-info">
                            You’ll find your favorite restaurants and stores here. You can add favorites by tapping the heart icon.
                        </p>
                    </div>
                    <div className="right">
                        <div className="svg-container">

                            <svg viewBox="0 0 165 83" fill="none" xmlns="http://www.w3.org/2000/svg" width="163" aria-label="add favorite venues by clicking the heart icon">
                                <path fillRule="evenodd" clipRule="evenodd" d="M38.98 20.91c-1.77 0-3.456.958-4.5 2.498-1.042-1.54-2.73-2.497-4.5-2.497a5.506 5.506 0 00-5.5 5.5c0 7.91 9.329 14.156 9.726 14.417a.49.49 0 00.55 0c.397-.261 9.725-6.506 9.725-14.417 0-3.032-2.468-5.5-5.5-5.5z" fill="#F93A25" fillOpacity="0.64"></path>
                                <path d="M61.217 37.86v-6.002h6.138V30.32h-6.138v-4.764h6.685V24h-8.414v13.86h1.73zm11.31.183c1.383 0 2.516-.605 3.189-1.71h.153v1.528h1.575v-7.089c0-2.151-1.412-3.448-3.938-3.448-2.209 0-3.841 1.095-4.063 2.757h1.672c.23-.817 1.095-1.287 2.334-1.287 1.546 0 2.343.7 2.343 1.978v.942l-2.987.182c-2.41.144-3.775 1.21-3.775 3.064 0 1.892 1.49 3.083 3.497 3.083zm.307-1.45c-1.2 0-2.094-.615-2.094-1.672 0-1.037.692-1.584 2.267-1.69l2.785-.182v.95c0 1.48-1.258 2.594-2.958 2.594zm15.516-9.086h-1.767l-2.833 8.529h-.154l-2.833-8.53h-1.768l3.833 10.355h1.69l3.832-10.354zm5.864 10.536c2.948 0 4.773-2.036 4.773-5.36 0-3.332-1.825-5.359-4.773-5.359-2.949 0-4.774 2.027-4.774 5.36 0 3.323 1.825 5.36 4.774 5.36zm0-1.489c-1.96 0-3.064-1.421-3.064-3.87 0-2.46 1.104-3.871 3.064-3.871s3.064 1.412 3.064 3.87c0 2.45-1.105 3.871-3.064 3.871zm15.526-9.047h-1.652v6.128c0 1.815-.999 2.9-2.824 2.9-1.652 0-2.344-.864-2.344-2.728v-6.3h-1.652v6.704c0 2.449 1.211 3.832 3.535 3.832 1.585 0 2.689-.653 3.208-1.806h.154v1.624h1.575V27.507zm2.895 10.354h1.652v-6.416c0-1.46 1.143-2.517 2.719-2.517.326 0 .922.058 1.056.096v-1.652a7.093 7.093 0 00-.826-.048c-1.373 0-2.564.71-2.872 1.72h-.153v-1.537h-1.576V37.86zm8.14-12.352c.634 0 1.153-.519 1.153-1.153s-.519-1.152-1.153-1.152-1.152.518-1.152 1.152c0 .634.518 1.153 1.152 1.153zm-.826 12.352h1.652V27.507h-1.652V37.86zm5.278-13.034v2.68h-1.672v1.383h1.672v6.281c0 1.979.855 2.766 2.987 2.766.326 0 .643-.038.97-.096V36.45a6.978 6.978 0 01-.768.038c-1.076 0-1.537-.519-1.537-1.738v-5.86h2.305v-1.382h-2.305v-2.68h-1.652zm12.942 10.354c-.432.912-1.335 1.402-2.67 1.402-1.758 0-2.901-1.297-2.987-3.342v-.077h7.443v-.634c0-3.218-1.7-5.206-4.495-5.206-2.843 0-4.668 2.113-4.668 5.37 0 3.274 1.797 5.35 4.668 5.35 2.267 0 3.881-1.096 4.361-2.863h-1.652zm-2.728-6.397c1.643 0 2.738 1.21 2.776 3.045h-5.705c.125-1.835 1.277-3.045 2.929-3.045z" fill="#202125"></path>
                                <rect x="0.703" y="0.703" width="163.1" height="60.417" rx="10.538" stroke="#202125" strokeOpacity="0.16" strokeWidth="1.405"></rect>
                                <g clipPath="url(#add-favorite_svg__clip0)">
                                    <path d="M124.944 50.4c.122.397.249.792.374 1.189l.052.166-.167.062a47.98 47.98 0 01-1.202.412c1.282 4.023 2.598 8.035 3.9 12.05l.056.174-.175.059c-.338.113-.678.227-1.016.347l-.183.064-.057-.183c-.12-.394-.25-.785-.385-1.173-1.389.438-2.778.882-4.156 1.354.442 1.357.878 2.715 1.321 4.071.404-.123.817-.236 1.214-.396l.218-.088.037.228c.069.41.236.795.365 1.187.39-.105.777-.226 1.165-.352l.164-.053.066.158c.337.818.578 1.67.866 2.509.404-.113.806-.237 1.208-.363l.174-.054.058.17c.279.84.55 1.681.837 2.519.404-.125.815-.236 1.213-.392l.201-.077.049.204c.206.863.539 1.693.807 2.538.394-.119.786-.24 1.179-.365l.176-.058.058.172c.439 1.294.853 2.598 1.293 3.892a465.926 465.926 0 006.857-2.19c2.335-.761 4.677-1.5 6.996-2.314-.458-1.284-.761-2.618-1.235-3.896l-.067-.184.19-.057a21.25 21.25 0 001.172-.39c-.404-1.294-.822-2.585-1.239-3.875l-.052-.16.156-.067c.386-.167.786-.3 1.191-.428-.459-1.448-.955-2.882-1.38-4.34l-.001-.005-.001-.004c-.612-1.719-1.141-3.467-1.726-5.195-.395.131-.791.255-1.186.377l-.172.054-.059-.167c-.132-.38-.262-.764-.381-1.151-.41.12-.809.264-1.219.372l-.159.041-.06-.15c-.158-.388-.275-.794-.411-1.196-.862.276-1.72.563-2.583.83l-.174.053-.058-.17c-.131-.38-.259-.76-.379-1.146-1.343.36-2.653.834-3.979 1.248l-.17.053-.06-.162c-.145-.388-.281-.78-.409-1.178-.86.275-1.717.56-2.581.82l-.172.052-.057-.168c-.585-1.743-1.143-3.495-1.717-5.241a101.286 101.286 0 00-1.199.387l-.182.061-.056-.18a11.248 11.248 0 00-.423-1.19c-.908.297-1.815.595-2.725.884z" fill="#fff"></path>
                                    <path d="M124.942 50.398c.911-.29 1.818-.586 2.726-.883.189.434.333.885.47 1.337-.92.308-1.847.596-2.767.907-.143-.453-.289-.906-.429-1.36zM124 52.228c.458-.152.918-.3 1.371-.468 1.623 4.995 3.252 9.988 4.869 14.986-.46.16-.922.31-1.388.451-.154-.444-.3-.892-.439-1.342-.465.131-.925.283-1.384.434a20.52 20.52 0 01-.446-1.37c.454-.166.915-.31 1.373-.466-1.32-4.075-2.656-8.144-3.956-12.225zM128.154 50.881c.456-.154.915-.3 1.375-.445.592 1.804 1.166 3.615 1.772 5.415.924-.274 1.836-.584 2.754-.878.146.451.293.902.466 1.344 1.386-.426 2.75-.929 4.152-1.304.137.441.283.88.435 1.318.924-.282 1.84-.59 2.76-.886.153.45.271.915.466 1.35.47-.109.92-.281 1.382-.416.136.443.282.883.437 1.32.455-.139.909-.282 1.361-.433.586 1.73 1.115 3.478 1.727 5.199.425 1.46.921 2.897 1.381 4.345-.457.145-.913.29-1.347.493.434 1.344.869 2.688 1.29 4.036-.449.161-.899.324-1.359.449-.495-1.35-.915-2.727-1.346-4.099.458-.143.915-.292 1.371-.444l-3.087-9.53a57.71 57.71 0 00-1.37.444c-.169-.433-.284-.887-.464-1.316-.48.06-.926.264-1.384.41.433 1.366.901 2.72 1.316 4.092l-1.356.443c-.622-1.808-1.179-3.636-1.781-5.45-.928.296-1.853.6-2.778.902.442 1.362.899 2.719 1.324 4.085-.456.158-.914.307-1.375.447a335.44 335.44 0 01-1.757-5.452c-.928.297-1.855.596-2.779.908.579 1.817 1.185 3.626 1.767 5.442-.459.164-.923.315-1.391.453-1.324-4.08-2.646-8.16-3.962-12.242z" fill="#1C1C1C"></path>
                                    <path d="M121.984 64.92c1.378-.472 2.767-.916 4.156-1.354.156.448.31.897.443 1.352-.912.32-1.836.602-2.752.907.258.911.634 1.786.863 2.705-.445.203-.923.32-1.389.461-.443-1.356-.878-2.714-1.321-4.071zM124.742 68.549c.423-.212.883-.333 1.336-.467.157.451.305.906.449 1.363.463-.148.925-.299 1.389-.443.305.902.588 1.812.888 2.715.455-.15.913-.298 1.372-.44.289.91.652 1.804.851 2.739-.437.186-.899.3-1.35.44-.306-.894-.596-1.792-.895-2.687-.458.146-.918.286-1.381.416-.306-.889-.552-1.8-.924-2.664-.442.145-.888.28-1.336.401-.149-.452-.359-.893-.399-1.373zM131.092 74.001c.44-.182.902-.308 1.356-.453.306.9.588 1.808.884 2.71.46-.151.923-.302 1.39-.436.302.901.579 1.812.886 2.711 3.687-1.187 7.371-2.385 11.054-3.582-.279-.91-.591-1.809-.875-2.718.47-.16.939-.318 1.419-.445.515 1.332.821 2.733 1.301 4.079-2.319.813-4.662 1.551-6.997 2.313a468.217 468.217 0 01-6.856 2.19c-.459-1.351-.89-2.712-1.351-4.061-.45.145-.903.284-1.356.422-.287-.91-.657-1.798-.855-2.73z" fill="#1C1C1C"></path>
                                </g>
                                <defs>
                                    <clipPath id="add-favorite_svg__clip0">
                                        <path d="M118 52.652L141.572 45l9.739 30.001-23.572 7.652-9.739-30z" fill="#fff"></path>
                                    </clipPath>
                                </defs>
                            </svg>
                        </div>
                    </div>
                </div>
            }

            {(favList || favList.length) &&
                <>
                    <div className="favourite-list-header">
                        <span className="favourite-list-title">
                            Your favorites
                        </span>

                        <button onClick={() => navigate('/seeall', { state: { title: ' Your favorites', items: listToDisplay, type: 'restaurant', wideScreen: true } })} className="see-all-btn">
                            See all
                        </button>
                    </div>

                    <div className="favourite-list-content">
                        {listToDisplay.map(item => {
                            return (
                                <RestaurantPreview key={item._id} restaurant={item} />
                            )
                        })}

                        {placeHolders().map((img, idx) => {
                            return (
                                <div key={idx} className="img-container">
                                    {img}
                                </div>
                            )
                        })
                        }
                    </div>
                </>
            }

        </div>
    )
}