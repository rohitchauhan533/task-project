// accordionActions.js
import { EDIT_ACCORDION_ITEM, DELETE_ACCORDION_ITEM, SEARCH_ACCORDION_ITEM, CLEAR_ACCORDION_ITEM } from './actionTypes';

export const editAccordionItem = (id, newData) => ({
  type: EDIT_ACCORDION_ITEM,
  payload: { id, newData },
});

export const deleteAccordionItem = id => ({
  type: DELETE_ACCORDION_ITEM,
  payload: id,
});


export const SearchAccordionItem = text =>({
  type: SEARCH_ACCORDION_ITEM,
  payload: text
})

export const ClearSearchAccordionItem = () =>({
  type: CLEAR_ACCORDION_ITEM,
})