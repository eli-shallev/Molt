import { userService } from "../../services/user.service"

export const UPDATE_USER = 'UPDATE_USER'

const initialState = {
    user: userService.getLoggedinUser()
}

export function userReducer(state = initialState, action) {
    switch (action.type) {
        case UPDATE_USER:
            return { ...state, user: action.user }
        default:
            return state
    }
}