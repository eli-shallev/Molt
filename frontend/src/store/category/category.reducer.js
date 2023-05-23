
export const SET_CATEGORIES = 'SET_CATEGORIES'

const initialState = {
    categories: [],
}

export function categoryReducer(state = initialState, action) {
        let categories
    switch (action.type) {
        case SET_CATEGORIES:
    return { ...state, categories: action.categories }
        default:
    return state
}
}