import { catsInitialValue, catsReducer } from "../features/catsSlice";

const { createStore, combineReducers, applyMiddleware } = require("redux");
const { default: thunk } = require("redux-thunk");
const { categoryInitialValue, categorysReducer } = require("../features/categorySlice");

const store = createStore(
  combineReducers({
    categorys: categorysReducer,
    cats: catsReducer,
  }),
  {
    categorys: categoryInitialValue,
    cats: catsInitialValue,
  },
  applyMiddleware(thunk)
);

export default store