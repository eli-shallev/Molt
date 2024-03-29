import { storageService } from "./async-storage.service";
import { restauranstService } from "./restaurant.service";
import { utilService } from "./util.service";

const STORAGE_KEY_LOGGEDIN_USER = 'loggedinUser'
_createDemoData()
export const userService = {
    // login,
    // logout,
    signup,
    getLoggedinUser,
    saveLocalUser,
    getUsers,
    getById,
    getRecentOrders,
    updateUser,
    // remove,
    // update,
    // changeScore
}

function getUsers() {
    return storageService.query('user')
}

async function getById(userId) {
    const user = await storageService.get('user', userId)
    return user
}

async function signup(userCred) {
    if (!userCred.imgUrl) userCred.imgUrl = 'https://cdn.pixabay.com/photo/2020/07/01/12/58/icon-5359553_1280.png'
    userCred._id = utilService.makeId()
    const user = await storageService.post('user', userCred)
    return saveLocalUser(user)
}

async function updateUser(user) {
    const updatedUser = await storageService.put('user', user)
    return saveLocalUser(updatedUser)
}

function saveLocalUser(user) {
    user = {
        _id: user._id,
        fullname: user.fullname,
        imgUrl: user.imgUrl,
        recentSearches: user.recentSearches,
        recentOrders: user.recentOrders,
        email: user.email,
        phoneNumber: user.phoneNumber,
        favorites: user.favorites
    }
    sessionStorage.setItem(STORAGE_KEY_LOGGEDIN_USER, JSON.stringify(user))
    return user
}

function getLoggedinUser() {
    return JSON.parse(sessionStorage.getItem(STORAGE_KEY_LOGGEDIN_USER))
}

function _createDemoData() {
    let users = utilService.loadFromStorage('user')
    if (!users || !users.length) {
        signup({
            fullname: 'eli shallev',
            password: '1234',
            username: 'eli',
            email:'elisha@gmail.com',
            phoneNumber: '0525040302',
            recentSearches: ['asian', 'kosher', 'boby'],
            recentOrders: ['mres1', 'mres2'],
            favorites: ['mres1', 'mres2']
        })
    } else {
        if (!getLoggedinUser()) {
            saveLocalUser(users[0])
        }
    }
}

function getRecentOrders() {
    const recentOrders = []
    getLoggedinUser().recentOrders.forEach(id => {
        const rest = restauranstService.getById(id).then(res => res)
        recentOrders.push(rest)
    })
    return recentOrders
}