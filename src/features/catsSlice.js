export const catsInitialValue = [];

export const ADD_CATS = "ADD_CATS";
export const CHANGE_CATS = "CHANGE_CATS";


export const catsReducer = (state = [], action) => {
  if (action.type === ADD_CATS) {
    return [...state, ...action.payload];
  }else if(action.type === CHANGE_CATS){
    return [ ...action.payload];
  }

  return state;
};

export const selectCats = (state) => state.cats;

export const addCatsAction = (payload) => {
    return {
      type: ADD_CATS,
      payload,
    };
};

export const changeCatsAction = (payload) => {
    return {
      type: CHANGE_CATS,
      payload,
    };
};
