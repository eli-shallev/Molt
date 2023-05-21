
export const SET_RESTAURENTS = 'SET_RESTAURENTS'
export const SET_IS_LOADING = 'SET_IS_LOADING'

const initialState = {
    restaurants: [],
    isLoading: false
}

export function restaurantReducer(state = initialState, action) {
        let restaurants
    switch (action.type) {
        case SET_RESTAURENTS:
    return { ...state, restaurants: action.restaurants }
        case SET_IS_LOADING:
    return { ...state, isLoading: action.isLoading }
        default:
    return state
}
}