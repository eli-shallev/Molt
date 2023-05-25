export function RestaurantsPreview({ restaurant }) {

    return (
        <div className="restaurants-preview">
            <img className="restaurants-preview-img" src={restaurant.imgUrl} alt={restaurant.title} />
            <div className="restaurants-preview-body">
                <div className="restaurants-preview-info">
                    <span className="restaurants-preview-title">
                        {restaurant.title}
                    </span>
                    <span className="restaurants-preview-categories">

                    </span>
                </div>
                <div className="restaurants-preview-time">
                    
                </div>
            </div>
            <div className="restaurants-preview-footer">

            </div>
        </div>
    )
}