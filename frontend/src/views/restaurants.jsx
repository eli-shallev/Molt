import { useSelector } from "react-redux";
import { ItemList } from "../cmps/item-list";
import { Loader } from "../cmps/loader";

export function Restaurants() {
    const categories = useSelector((storeState) => storeState.categoryModule.categories)
    const isLoading = useSelector((storeState) => storeState.restaurantModule.isLoading)
    return (
        <>
            {isLoading && <Loader />}
            {!isLoading &&
                (<div className="restaurants">
                    <ItemList title='I fell like eating..' items={categories} type='category' />
                </div>)}
        </>
    )
}