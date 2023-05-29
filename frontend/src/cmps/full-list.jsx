import { CategoryPreview } from "./category-preview"
import { RestaurantPreview } from "./restaurant-preview"

export function FullList({ title, items, type }) {

    return (
        <div className="full-list">
            <span className="full-list-title">
                {title}
            </span>
            <div className={`full-list-container ${type}`}>
                {items.map(item => {
                    if (type === 'category') return <CategoryPreview key={item._id} category={item} />
                    else if (type === 'restaurant') return <RestaurantPreview key={item._id} restaurant={item} />
                    else return <div></div>
                })}
            </div>
        </div>
    )
}