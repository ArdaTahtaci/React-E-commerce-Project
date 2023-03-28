import { ADD_TO_CHART, DELETE_ALL, DELETE_ONE, FETCH_ALL_PRODUCTS, FETCH_BY_CATEGORY, FETCH_BY_ID } from "./types.js";

const initialState = {
    allProducts: undefined,
    selectedProducts: undefined,
    singleProduct: undefined,
    chart: []
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_ALL_PRODUCTS: return {
            ...state,
            allProducts: action.payload
        }
        case FETCH_BY_CATEGORY: return {
            ...state,
            selectedProducts: action.payload
        }
        case FETCH_BY_ID: return {
            ...state,
            singleProduct: action.payload
        }
        case ADD_TO_CHART: return {
            ...state,
            chart: [...state.chart, action.payload]
        }
        case DELETE_ALL: return {
            ...state,
            chart: []
        }
        case DELETE_ONE: return {
            ...state,
            chart: state.chart.filter((chartItem) => {
                return chartItem.product.id != action.payload
            })
        }
        default: return state
    }
}

export default reducer;