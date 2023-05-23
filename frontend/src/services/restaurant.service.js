import { storageService } from "./async-storage.service";
import { utilService } from "./util.service";

const DB_KEY = 'RESTAURANTS'
_createDemoData()

export const restauranstService ={
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
    let restauransts = utilService.loadFromStorage(DB_KEY)
    if (!restauransts || !restauransts.length) {
        restauransts = [
            {
                _id: 'mres1',
                title: 'mhooka',
                description: 'Mhookas rich cuisine combines classic Thai dishes with the latest cuisines from Japan and China. The dishes are serve straight from the hot wok to your plate and the fresh sushi - a work of art from the freshes Ingredients. The raw materials at Mhooka are among the highest quality in the global Asian food industry and our priority will always be uncompromising freshness. Kosher by Chief Rabbinate Jerusalem',
                address: {
                    street: 'Derech Agudat Sport Beitar',
                    number: '1',
                    city: 'jerusalem',
                    postcode: '9695989',
                    location: {
                        lat: '31.751541',
                        lon: '35.187195'
                    }
                },
                minOrder: 50,
                phoneNumber: '0598888888',
                rating: {
                    rate: 8.9,
                    numOfRates: 56
                },
                priceRange: 2, //1 to 4
                imgUrl: 'https://res.cloudinary.com/dxajfza46/image/upload/v1684667657/molts/restaurants/mhooka_b5b9dz.avif',
                categories: [
                    'catkosher',
                    'catasian'
                ]

            },
            {
                _id: 'mres2',
                title: 'mhooka',
                description: 'Mhookas rich cuisine combines classic Thai dishes with the latest cuisines from Japan and China. The dishes are serve straight from the hot wok to your plate and the fresh sushi - a work of art from the freshes Ingredients. The raw materials at Mhooka are among the highest quality in the global Asian food industry and our priority will always be uncompromising freshness. Kosher by Chief Rabbinate Jerusalem',
                address: {
                    street: 'Derech Agudat Sport Beitar',
                    number: '1',
                    city: 'jerusalem',
                    postcode: '9695989',
                    location: {
                        lat: '31.751541',
                        lon: '35.187195'
                    }
                },
                minOrder: 50,
                phoneNumber: '0598888888',
                rating: {
                    rate: 8.9,
                    numOfRates: 56
                },
                priceRange: 2, //1 to 4
                imgUrl: 'https://res.cloudinary.com/dxajfza46/image/upload/v1684667657/molts/restaurants/mhooka_b5b9dz.avif',
                categories: [
                    'catkosher',
                    'catasian'
                ]

            },
            {
                _id: utilService.makeId(),
                title: 'mhooka',
                description: 'Mhookas rich cuisine combines classic Thai dishes with the latest cuisines from Japan and China. The dishes are serve straight from the hot wok to your plate and the fresh sushi - a work of art from the freshes Ingredients. The raw materials at Mhooka are among the highest quality in the global Asian food industry and our priority will always be uncompromising freshness. Kosher by Chief Rabbinate Jerusalem',
                address: {
                    street: 'Derech Agudat Sport Beitar',
                    number: '1',
                    city: 'jerusalem',
                    postcode: '9695989',
                    location: {
                        lat: '31.751541',
                        lon: '35.187195'
                    }
                },
                minOrder: 50,
                phoneNumber: '0598888888',
                rating: {
                    rate: 8.9,
                    numOfRates: 56
                },
                priceRange: 2, //1 to 4
                imgUrl: 'https://res.cloudinary.com/dxajfza46/image/upload/v1684667657/molts/restaurants/mhooka_b5b9dz.avif',
                categories: [
                    'catkosher',
                    'catasian'
                ]

            },
            {
                _id: utilService.makeId(),
                title: 'mhooka',
                description: 'Mhookas rich cuisine combines classic Thai dishes with the latest cuisines from Japan and China. The dishes are serve straight from the hot wok to your plate and the fresh sushi - a work of art from the freshes Ingredients. The raw materials at Mhooka are among the highest quality in the global Asian food industry and our priority will always be uncompromising freshness. Kosher by Chief Rabbinate Jerusalem',
                address: {
                    street: 'Derech Agudat Sport Beitar',
                    number: '1',
                    city: 'jerusalem',
                    postcode: '9695989',
                    location: {
                        lat: '31.751541',
                        lon: '35.187195'
                    }
                },
                minOrder: 50,
                phoneNumber: '0598888888',
                rating: {
                    rate: 8.9,
                    numOfRates: 56
                },
                priceRange: 2, //1 to 4
                imgUrl: 'https://res.cloudinary.com/dxajfza46/image/upload/v1684667657/molts/restaurants/mhooka_b5b9dz.avif',
                categories: [
                    'catkosher',
                    'catasian'
                ]

            },
            {
                _id: utilService.makeId(),
                title: 'mhooka',
                description: 'Mhookas rich cuisine combines classic Thai dishes with the latest cuisines from Japan and China. The dishes are serve straight from the hot wok to your plate and the fresh sushi - a work of art from the freshes Ingredients. The raw materials at Mhooka are among the highest quality in the global Asian food industry and our priority will always be uncompromising freshness. Kosher by Chief Rabbinate Jerusalem',
                address: {
                    street: 'Derech Agudat Sport Beitar',
                    number: '1',
                    city: 'jerusalem',
                    postcode: '9695989',
                    location: {
                        lat: '31.751541',
                        lon: '35.187195'
                    }
                },
                minOrder: 50,
                phoneNumber: '0598888888',
                rating: {
                    rate: 8.9,
                    numOfRates: 56
                },
                priceRange: 2, //1 to 4
                imgUrl: 'https://res.cloudinary.com/dxajfza46/image/upload/v1684667657/molts/restaurants/mhooka_b5b9dz.avif',
                categories: [
                    'catkosher',
                    'catasian'
                ]

            },
            {
                _id: utilService.makeId(),
                title: 'mhooka',
                description: 'Mhookas rich cuisine combines classic Thai dishes with the latest cuisines from Japan and China. The dishes are serve straight from the hot wok to your plate and the fresh sushi - a work of art from the freshes Ingredients. The raw materials at Mhooka are among the highest quality in the global Asian food industry and our priority will always be uncompromising freshness. Kosher by Chief Rabbinate Jerusalem',
                address: {
                    street: 'Derech Agudat Sport Beitar',
                    number: '1',
                    city: 'jerusalem',
                    postcode: '9695989',
                    location: {
                        lat: '31.751541',
                        lon: '35.187195'
                    }
                },
                minOrder: 50,
                phoneNumber: '0598888888',
                rating: {
                    rate: 8.9,
                    numOfRates: 56
                },
                priceRange: 2, //1 to 4
                imgUrl: 'https://res.cloudinary.com/dxajfza46/image/upload/v1684667657/molts/restaurants/mhooka_b5b9dz.avif',
                categories: [
                    'catkosher',
                    'catasian'
                ]

            },
            {
                _id: utilService.makeId(),
                title: 'mhooka',
                description: 'Mhookas rich cuisine combines classic Thai dishes with the latest cuisines from Japan and China. The dishes are serve straight from the hot wok to your plate and the fresh sushi - a work of art from the freshes Ingredients. The raw materials at Mhooka are among the highest quality in the global Asian food industry and our priority will always be uncompromising freshness. Kosher by Chief Rabbinate Jerusalem',
                address: {
                    street: 'Derech Agudat Sport Beitar',
                    number: '1',
                    city: 'jerusalem',
                    postcode: '9695989',
                    location: {
                        lat: '31.751541',
                        lon: '35.187195'
                    }
                },
                minOrder: 50,
                phoneNumber: '0598888888',
                rating: {
                    rate: 8.9,
                    numOfRates: 56
                },
                priceRange: 2, //1 to 4
                imgUrl: 'https://res.cloudinary.com/dxajfza46/image/upload/v1684667657/molts/restaurants/mhooka_b5b9dz.avif',
                categories: [
                    'catkosher',
                    'catasian'
                ]

            },
            {
                _id: utilService.makeId(),
                title: 'mhooka',
                description: 'Mhookas rich cuisine combines classic Thai dishes with the latest cuisines from Japan and China. The dishes are serve straight from the hot wok to your plate and the fresh sushi - a work of art from the freshes Ingredients. The raw materials at Mhooka are among the highest quality in the global Asian food industry and our priority will always be uncompromising freshness. Kosher by Chief Rabbinate Jerusalem',
                address: {
                    street: 'Derech Agudat Sport Beitar',
                    number: '1',
                    city: 'jerusalem',
                    postcode: '9695989',
                    location: {
                        lat: '31.751541',
                        lon: '35.187195'
                    }
                },
                minOrder: 50,
                phoneNumber: '0598888888',
                rating: {
                    rate: 8.9,
                    numOfRates: 56
                },
                priceRange: 2, //1 to 4
                imgUrl: 'https://res.cloudinary.com/dxajfza46/image/upload/v1684667657/molts/restaurants/mhooka_b5b9dz.avif',
                categories: [
                    'catkosher',
                    'catasian'
                ]

            },
            {
                _id: utilService.makeId(),
                title: 'mhooka',
                description: 'Mhookas rich cuisine combines classic Thai dishes with the latest cuisines from Japan and China. The dishes are serve straight from the hot wok to your plate and the fresh sushi - a work of art from the freshes Ingredients. The raw materials at Mhooka are among the highest quality in the global Asian food industry and our priority will always be uncompromising freshness. Kosher by Chief Rabbinate Jerusalem',
                address: {
                    street: 'Derech Agudat Sport Beitar',
                    number: '1',
                    city: 'jerusalem',
                    postcode: '9695989',
                    location: {
                        lat: '31.751541',
                        lon: '35.187195'
                    }
                },
                minOrder: 50,
                phoneNumber: '0598888888',
                rating: {
                    rate: 8.9,
                    numOfRates: 56
                },
                priceRange: 2, //1 to 4
                imgUrl: 'https://res.cloudinary.com/dxajfza46/image/upload/v1684667657/molts/restaurants/mhooka_b5b9dz.avif',
                categories: [
                    'catkosher',
                    'catasian'
                ]

            },
            {
                _id: utilService.makeId(),
                title: 'mhooka',
                description: 'Mhookas rich cuisine combines classic Thai dishes with the latest cuisines from Japan and China. The dishes are serve straight from the hot wok to your plate and the fresh sushi - a work of art from the freshes Ingredients. The raw materials at Mhooka are among the highest quality in the global Asian food industry and our priority will always be uncompromising freshness. Kosher by Chief Rabbinate Jerusalem',
                address: {
                    street: 'Derech Agudat Sport Beitar',
                    number: '1',
                    city: 'jerusalem',
                    postcode: '9695989',
                    location: {
                        lat: '31.751541',
                        lon: '35.187195'
                    }
                },
                minOrder: 50,
                phoneNumber: '0598888888',
                rating: {
                    rate: 8.9,
                    numOfRates: 56
                },
                priceRange: 2, //1 to 4
                imgUrl: 'https://res.cloudinary.com/dxajfza46/image/upload/v1684667657/molts/restaurants/mhooka_b5b9dz.avif',
                categories: [
                    'catkosher',
                    'catasian'
                ]

            }
        ]
    }
    utilService.saveToStorage(DB_KEY,restauransts)
}