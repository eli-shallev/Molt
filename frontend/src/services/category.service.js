import { storageService } from "./async-storage.service";
import { utilService } from "./util.service";

const DB_KEY = 'CATEGORIES'
_createDemoData()

export const categoryService ={
    query
}
async function query() {
    try {
        await storageService.query(DB_KEY)
        return await storageService.query(DB_KEY)
    } catch (err) {
        throw err
    }
}

function _createDemoData() {
    let caregories = utilService.loadFromStorage(DB_KEY)
    if (!caregories || !caregories.length) {
        caregories = [
            {
                _id: 'catkosher',
                title: 'kosher',
                imgUrl: 'https://res.cloudinary.com/dxajfza46/image/upload/v1684862255/molts/categories/kosher_s5p9jz.avif',
                restaurants: [
                    'mres1',
                    'mres2'
                ]

            },
            {
                _id: 'catasian',
                title: 'asian',
                imgUrl: 'https://res.cloudinary.com/dxajfza46/image/upload/v1684862253/molts/categories/asian_tgcjjk.avif',
                restaurants: [
                    'mres1',
                    'mres2'
                ]

            },
            {
                _id: utilService.makeId(),
                title: 'kosher',
                imgUrl: 'https://res.cloudinary.com/dxajfza46/image/upload/v1684862255/molts/categories/kosher_s5p9jz.avif',
                restaurants: [
                    'mres1',
                    'mres2'
                ]

            },
            {
                _id: utilService.makeId(),
                title: 'asian',
                imgUrl: 'https://res.cloudinary.com/dxajfza46/image/upload/v1684862253/molts/categories/asian_tgcjjk.avif',
                restaurants: [
                    'mres1',
                    'mres2'
                ]

            },
            {
                _id: utilService.makeId(),
                title: 'kosher',
                imgUrl: 'https://res.cloudinary.com/dxajfza46/image/upload/v1684862255/molts/categories/kosher_s5p9jz.avif',
                restaurants: [
                    'mres1',
                    'mres2'
                ]

            },
            {
                _id: utilService.makeId(),
                title: 'asian',
                imgUrl: 'https://res.cloudinary.com/dxajfza46/image/upload/v1684862253/molts/categories/asian_tgcjjk.avif',
                restaurants: [
                    'mres1',
                    'mres2'
                ]

            },
            {
                _id: utilService.makeId(),
                title: 'kosher',
                imgUrl: 'https://res.cloudinary.com/dxajfza46/image/upload/v1684862255/molts/categories/kosher_s5p9jz.avif',
                restaurants: [
                    'mres1',
                    'mres2'
                ]

            },
            {
                _id: utilService.makeId(),
                title: 'asian',
                imgUrl: 'https://res.cloudinary.com/dxajfza46/image/upload/v1684862253/molts/categories/asian_tgcjjk.avif',
                restaurants: [
                    'mres1',
                    'mres2'
                ]

            },
            {
                _id: utilService.makeId(),
                title: 'kosher',
                imgUrl: 'https://res.cloudinary.com/dxajfza46/image/upload/v1684862255/molts/categories/kosher_s5p9jz.avif',
                restaurants: [
                    'mres1',
                    'mres2'
                ]

            },
            {
                _id: utilService.makeId(),
                title: 'asian',
                imgUrl: 'https://res.cloudinary.com/dxajfza46/image/upload/v1684862253/molts/categories/asian_tgcjjk.avif',
                restaurants: [
                    'mres1',
                    'mres2'
                ]

            },

        ]
    }
    utilService.saveToStorage(DB_KEY,caregories)
}