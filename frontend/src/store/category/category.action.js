import { store } from "../store"

import { categoryService } from "../../services/category.service"
import { SET_CATEGORIES } from "./category.reducer"

export async function loadCategories() {
    try {
        const categories = await categoryService.query()
        store.dispatch({ type: SET_CATEGORIES, categories })
    } catch (err) {
        console.log('Had issues loading categories', err)
        throw err
    }
}