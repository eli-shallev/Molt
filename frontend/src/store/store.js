import { combineReducers, legacy_createStore as createStore } from 'redux'
import { restaurantReducer } from './restaurant/restaurant.reducer'



const rootReducer = combineReducers({
    restaurantModule: restaurantReducer,

})

const middleware = (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__() : undefined
export const store = createStore(rootReducer, middleware)