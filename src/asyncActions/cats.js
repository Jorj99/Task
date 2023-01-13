import { addCatsAction, changeCatsAction } from "../features/catsSlice"

export const fetchCats = (id) => {
    return function(dispatch) {
        fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=1&category_ids=${id}`)
        .then((response) => response.json())
        .then((json) => dispatch(changeCatsAction(json)))
    }
}

export const fetchNewCats = (id, page) => {
    return function(dispatch) {
        fetch(`https://api.thecatapi.com/v1/images/search?limit=10&page=${page}&category_ids=${id}`)
        .then((response) => response.json())
        .then((json) => dispatch(addCatsAction(json)))
    }
}