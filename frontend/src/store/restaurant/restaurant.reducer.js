
export const SET_RESTAURENTS = 'SET_RESTAURENTS'
export const SET_IS_LOADING = 'SET_IS_LOADING'
export const SET_IS_SCREEN = 'SET_IS_SCREEN'

const initialState = {
    restaurants: [],
    isLoading: false,
    isScreen: false
}

export function restaurantReducer(state = initialState, action) {
    let restaurants
    switch (action.type) {
        case SET_RESTAURENTS:
            return { ...state, restaurants: action.restaurants }
        case SET_IS_LOADING:
            return { ...state, isLoading: action.isLoading }
        case SET_IS_SCREEN:
            return { ...state, isScreen: action.isScreen }
        default:
            return state
    }
}