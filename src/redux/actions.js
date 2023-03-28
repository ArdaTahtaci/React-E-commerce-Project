import { ADD_TO_CHART, DELETE_ALL, DELETE_ONE, FETCH_ALL_PRODUCTS, FETCH_BY_CATEGORY, FETCH_BY_ID } from "./types.js";

export const getAllProducts = (products) => {
    return {
        type: FETCH_ALL_PRODUCTS,
        payload: products
    }
}

export const getByCategory = (categorySelectedItems) => {
    return {
        type: FETCH_BY_CATEGORY,
        payload: categorySelectedItems
    }

}

export const getById = (singleProduct) => {
    return {
        type: FETCH_BY_ID,
        payload: singleProduct
    }
}

export const addToChart = (item) => {
    return {
        type: ADD_TO_CHART,
        payload: item
    }
}

export const deleteAllItemsInChart = () => {
    return {
        type: DELETE_ALL
    }
}

export const deleteById = (id) => {
    return {
        type: DELETE_ONE,
        payload: id
    }
}

