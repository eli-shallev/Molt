import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

export function CategoryPreview({ category }) {
    const navigate = useNavigate()
    const restaurants = useSelector((storeState) => storeState.restaurantModule.restaurants)

    return (
        <div onClick={() => navigate('/category-view', { state: { title: category.title, items:restaurants.filter(restaurant=> restaurant.categories.includes(category._id) ), type: 'restaurant' } })} className="category-preview">
            <img src={category.imgUrl} alt={category.title} className="category-img" />
            <div className="category-info">
                <span className="category-title">
                    {category.title}
                </span>
                <span className="category-counter">
                    {`${category.restaurants.length} places`}
                </span>
            </div>
        </div>
    )
}