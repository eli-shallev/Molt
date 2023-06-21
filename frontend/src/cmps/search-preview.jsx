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
            <img className="search-preview-img" src={item.imgUrl} alt="" />
            <div className="search-preview-content">
                <span className="search-preview-title">
                    {item.title}
                </span>
                <span className="search-preview-sub-title">
                    {item.subTitle}
                </span>
                <div className="search-preview-content-footer">
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
                </div>
            </div>
        </div>
    )
}

