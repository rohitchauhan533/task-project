// accordionActions.js
import { EDIT_ACCORDION_ITEM, DELETE_ACCORDION_ITEM } from './actionTypes';

export const editAccordionItem = (id, newData) => ({
  type: EDIT_ACCORDION_ITEM,
  payload: { id, newData },
});

export const deleteAccordionItem = id => ({
  type: DELETE_ACCORDION_ITEM,
  payload: id,
});
