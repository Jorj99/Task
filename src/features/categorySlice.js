export const categoryInitialValue = [];

export const ADD_CATEGORYS = "ADD_CATEGORYS";

export const categorysReducer = (state = [], action) => {
  if (action.type === ADD_CATEGORYS) {
    return [...state, ...action.payload];
  }

  return state;
};

export const selectCurrentCategorys = (state) => state.categorys;

export const addCurrentCategorysAction = (payload) => {
    return {
      type: ADD_CATEGORYS,
      payload,
    };
};
