import { restauranstService } from "../services/restaurant.service"

export function SearchPreview({ item }) {
    function priceRangeFull() {
        let ans = ''
        for (let index = 0; index < item.priceRange; index++) {
            ans += '$'
        }
        return ans
    }

    function priceRangeEmpty() {
        let ans = ''
        for (let index = 0; index < (4 - item.priceRange); index++) {
            ans += '$'
        }
        return ans
    }

    return (
        <div className="search-preview">
            <div className="search-preview-img-container" >
                <img className="search-preview-img" src={item.imgUrl} alt="" />
            </div>
            <div className="search-preview-content">
                <span className="search-preview-title">
                    {item.title}
                </span>
                <span className="search-preview-sub-title">
                    {item.subTitle}
                </span>
                <div className="search-preview-content-footer">
                    <div className="search-preview-delivery">
                        <div className="delivery-icon-container">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path fillRule="evenodd" clipRule="evenodd" d="M4.401 9.602c.281.281.666.439 1.062.439h.039a1.48 1.48 0 0 0 1.075-.496l3.157-3.507a1.505 1.505 0 0 0-.055-2.071L8.098 2.385A1.547 1.547 0 0 0 7 1.947c-.41.01-.802.191-1.076.495l-3.16 3.512a1.502 1.502 0 0 0 .054 2.066l1.583 1.582Zm6.321 2.132 1.451-1.659a8.276 8.276 0 0 0 4.655 1.42h.672a1.5 1.5 0 1 0 0-3h-.672a5.363 5.363 0 0 1-3.767-1.561 1.407 1.407 0 0 0-1.111-.438 1.5 1.5 0 0 0-1.079.511l-3.5 4a1.5 1.5 0 0 0 .3 2.236l.664.442a5.261 5.261 0 0 1 2.2 5.484 1.5 1.5 0 1 0 2.928.651 8.285 8.285 0 0 0-2.741-8.086ZM22 18.495a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Zm2 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm-17 0a2.5 2.5 0 1 0-5 0 2.5 2.5 0 0 0 5 0Zm2 0a4.5 4.5 0 1 1-9 0 4.5 4.5 0 0 1 9 0Zm3.125-14.5a2.375 2.375 0 1 1 4.75 0 2.375 2.375 0 0 1-4.75 0Z"></path>
                            </svg>
                        </div>
                        <span>₪{item.deliveryFee.toFixed(2)}</span>
                    </div>
                    <div className="search-preview-price-range">
                        <span className="price-range-full">
                            {priceRangeFull()}
                        </span>
                        <span className="price-range-empty">
                            {priceRangeEmpty()}
                        </span>
                    </div>
                    <span className="search-preview-address">
                        {`${item.address.street} ${item.address.number}, ${item.address.city}`}
                    </span>
                    <div className="search-preview-rating">
                        <div className="rating-icon-container">
                            {restauranstService.getRatingIcon(item.rating.rate)}
                        </div>
                        <span>
                            {item.rating.rate}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}

