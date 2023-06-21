import { storageService } from "./async-storage.service";
import { utilService } from "./util.service";

const DB_KEY = 'RESTAURANTS'
_createDemoData()

export const restauranstService = {
    query,
    getRatingIcon
}
async function query() {
    try {
        await storageService.query(DB_KEY)
        return await storageService.query(DB_KEY)
    } catch (err) {
        throw err
    }
}

function getRatingIcon(rating) {
    if (rating >= 9) {
        return (
            <svg viewBox="0 0 24 24">
                <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.6 0 12 0zm0 22C6.5 22 2 17.5 2 12S6.5 2 12 2s10 4.5 10 10-4.5 10-10 10zm0-2.9c-2.2 0-4-1.4-4.4-3.5-.2-.7.1-1.1.8-1.1 2.5 0 5-.1 7.4.1.7 0 .8.2.7 1-.4 2.1-2.3 3.5-4.5 3.5zM5 9.8c.1-2 1.7-3.2 3.5-2.6 1.1.4 1.9 1.7 1.8 2.9-.1.4-.4.8-.8.8-.4.1-.8-.2-1-.7-.1-.2-.2-.5-.2-.7-.1-.3-.3-.6-.7-.6-.3 0-.5.3-.6.6-.1.2-.1.3-.1.5-.1.5-.5.9-1.1.8-.4 0-.8-.4-.8-1zm8.7 0c.1-2 1.8-3.2 3.5-2.5 1.1.4 1.9 1.7 1.7 2.9-.1.4-.4.8-.9.8-.4 0-.8-.3-1-.7 0-.3 0-.6-.1-.9-.1-.2-.3-.4-.6-.4s-.5.2-.6.5c-.1.2-.1.4-.1.6-.1.6-.5 1-1.1.9-.6-.2-.9-.6-.8-1.2z" fillRule="evenodd" clipRule="evenodd" fill="currentColor"></path>
            </svg>
        )
    }
    else if(rating>=7){
        return(
            <svg viewBox="0 0 24 24">
                <path d="M12 0c6.6 0 12 5.4 12 12s-5.4 12-12 12S0 18.6 0 12 5.4 0 12 0zm0 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm4.7 12.2c.4.3.6.8.3 1.3-1.2 1.9-2.8 3-5 3.1-2.2-.1-3.8-1-4.8-2.9-.2-.5-.2-.9.1-1.3.2-.3.6-.4 1-.3.4.1.5.4.7.7.7 1.3 1.9 1.9 3.3 1.7 1.2-.1 2-.7 2.8-1.6.1-.2.2-.4.4-.5.2-.4.7-.5 1.2-.2zM16 7c1 0 1.9.8 1.9 1.9s-.8 1.9-1.9 1.9c-1 0-1.9-.8-1.9-1.9 0-1.1.8-1.9 1.9-1.9zM8 7c1 0 1.9.8 1.9 1.9s-.8 1.8-1.9 1.8c-1.1 0-1.9-.8-1.9-1.9C6.1 7.8 7 7 8 7z" fillRule="evenodd" clipRule="evenodd" fill="currentColor"></path>
            </svg>
        )
    }
    else return '🙁'

}

function _createDemoData() {
    let restauransts = utilService.loadFromStorage(DB_KEY)
    if (!restauransts || !restauransts.length) {
        restauransts = [
            {
                _id: 'mres1',
                title: 'mhooka',
                subTitle: 'Asian Kitchen - Kosher',
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
                deliveryFee: 14,
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
                subTitle: 'Asian Kitchen - Kosher',
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
                deliveryFee: 14,
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
                subTitle: 'Asian Kitchen - Kosher',
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
                deliveryFee: 14,
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
                subTitle: 'Asian Kitchen - Kosher',
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
                deliveryFee: 14,
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
                subTitle: 'Asian Kitchen - Kosher',
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
                deliveryFee: 14,
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
                subTitle: 'Asian Kitchen - Kosher',
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
                deliveryFee: 14,
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
                subTitle: 'Asian Kitchen - Kosher',
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
                deliveryFee: 14,
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
                title: 'mhooka-s',
                subTitle: 'Asian Kitchen - Kosher',
                description: 'boogy Mhookas rich cuisine combines classic Thai dishes with the latest cuisines from Japan and China. The dishes are serve straight from the hot wok to your plate and the fresh sushi - a work of art from the freshes Ingredients. The raw materials at Mhooka are among the highest quality in the global Asian food industry and our priority will always be uncompromising freshness. Kosher by Chief Rabbinate Jerusalem',
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
                deliveryFee: 14,
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
                subTitle: 'Asian Kitchen - Kosher',
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
                deliveryFee: 14,
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
                subTitle: 'Asian Kitchen - Kosher',
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
                deliveryFee: 14,
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
    utilService.saveToStorage(DB_KEY, restauransts)
}