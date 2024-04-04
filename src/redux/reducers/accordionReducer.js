// accordionReducer.js
import { EDIT_ACCORDION_ITEM, DELETE_ACCORDION_ITEM } from '../actions/actionTypes';
import { listData } from '../data';

const initialState = {
  accordionItems: listData,
};

const accordionReducer = (state = initialState, action) => {
  switch (action.type) {
    case EDIT_ACCORDION_ITEM:
      return {
        ...state,
        accordionItems: state.accordionItems.map(item =>
          item.id === action.payload.id ? { ...item, ...action.payload.newData } : item
        ),
      };
    case DELETE_ACCORDION_ITEM:
      return {
        ...state,
        accordionItems: state.accordionItems.filter(item => item.id !== action.payload),
      };
    default:
      return state;
  }
};

export default accordionReducer;
