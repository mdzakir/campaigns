import { ADD_ITEM, GET_ITEMS, EDIT_ITEM, DELETE_ITEM, ADD_COMMENT, TOGGLE_PLAY } from "./types";

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

export const editItem = (name, index) => {
  return {
    type: EDIT_ITEM,
    payload: {name, index}
  };
};

export const addComment = (comment, index) => {
  return {
    type: ADD_COMMENT,
    payload: { comment, index }
  };
};

export const togglePlay = (play, index) => {
  return {
    type: TOGGLE_PLAY,
    payload: {play, index}
  };
};