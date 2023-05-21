import { restauranstService } from "../../services/restaurant.service"
import { store } from "../store"
import { SET_RESTAURENTS, SET_IS_LOADING} from "./restaurant.reducer"

export async function loadRestaurants() {
    try {
        store.dispatch({ type: SET_IS_LOADING, isLoading: true })
        const restaurants = await SET_RESTAURENTS.query()
        store.dispatch({ type: SET_RESTAURENTS, restaurants })
    } catch (err) {
        console.log('Had issues loading restaurants', err)
        throw err
    } finally {
        store.dispatch({ type: SET_IS_LOADING, isLoading: false })
    }
}