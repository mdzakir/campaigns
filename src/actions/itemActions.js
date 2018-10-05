import { ADD_ITEM, GET_ITEMS, EDIT_ITEM, DELETE_ITEM, TOGGLE_PLAY } from "./types";

export const getItems = () => {
  return {
    type: GET_ITEMS
  };
};

export const deleteItem = (id) => {
  return {
    type: DELETE_ITEM,
    payload: id
  };
};

export const addItem = (item) => {
  return {
    type: ADD_ITEM,
    payload: item
  };
};

export const editItem = (item) => {
  return {
    type: EDIT_ITEM,
    payload: item
  };
};

export const togglePlay = (id) => {
  return {
    type: TOGGLE_PLAY,
    payload: id
  };
};