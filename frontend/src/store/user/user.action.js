
import { userService } from "../../services/user.service"
import { store } from "../store"
import { UPDATE_USER } from "./user.reducer"

export async function updateRecentSearches(userId, recentSearch) {
    try {
        const user = await userService.getById(userId)
        if (!recentSearch) {
            user.recentSearches = []
        } else {
            recentSearch = recentSearch.toLowerCase()
            if (user.recentSearches.includes(recentSearch)) {
                const idx = user.recentSearches.findIndex(rs => rs === recentSearch)
                user.recentSearches.splice(idx, 1)
            }
            user.recentSearches.unshift(recentSearch)
            if (user.recentSearches.length > 10) user.recentSearches.splice(10, 1)
        }
        const userCreds = await userService.updateUser(user)
        store.dispatch({ type: UPDATE_USER, user: userCreds })
    } catch (err) {
        console.log('Had issues updating recent searches', err)
        throw err
    }
}