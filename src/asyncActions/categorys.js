import { addCurrentCategorysAction } from "../features/categorySlice"

export const fetchCategorys = () => {
    return function(dispatch) {
        fetch("https://api.thecatapi.com/v1/categories")
        .then((response) => response.json())
        .then((json) => dispatch(addCurrentCategorysAction(json)))
    }
}