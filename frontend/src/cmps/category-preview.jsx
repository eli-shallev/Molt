export function CategoryPreview({ category, num }) {


    return (
        <div className="category-preview">
            <img src={category.imgUrl} alt={category.title} className="category-img" />
            <div className="category-info">
                <span className="category-title">
                    {category.title}
                </span>
                <span className="category-counter">
                    {`${category.restaurants.length} places ${num}`}
                </span>
            </div>
        </div>
    )
}