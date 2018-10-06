import uuid from "uuid";
import { ADD_ITEM, GET_ITEMS, EDIT_ITEM, DELETE_ITEM, TOGGLE_PLAY } from "../actions/types";

const initialState = {
  items: [
    {id: uuid(), name: 'Emails', created_time: new Date(),
      play: false,
      history:[
        {
          activityTime: new Date('2018', '10', '01'),
          activityBy: 'Zakir',
          activityText: 'Good luck!'
        },
        {
          activityTime: new Date('2018', '10', '01'),
          activityBy: 'Zakir',
          activityText: 'Renamed!'
        }
      ]},
    {id: uuid(), name: 'Push Notifications', created_time: new Date(),
      play: false,
      history:[
        {
          activityTime: new Date('2018', '10', '01'),
          activityBy: 'Zakir',
          activityText: 'Good luck!'
        },
        {
          activityTime: new Date('2018', '10', '01'),
          activityBy: 'Zakir',
          activityText: 'Renamed!'
        }
      ]},
    {id: uuid(), name: 'InApp Messages', created_time: new Date(),
      play: false,
      history:[
        {
          activityTime: new Date('2018', '10', '01'),
          activityBy: 'Zakir',
          activityText: 'Good luck!'
        },
        {
          activityTime: new Date('2018', '10', '01'),
          activityBy: 'Zakir',
          activityText: 'Renamed!'
        }
      ]},
    {id: uuid(), name: 'SMS', created_time: new Date(),
      play: false,
      history:[
        {
          activityTime: new Date('2018', '10', '01'),
          activityBy: 'Zakir',
          activityText: 'Good luck!'
        },
        {
          activityTime: new Date('2018', '10', '01'),
          activityBy: 'Zakir',
          activityText: 'Renamed!'
        }
      ]}
  ]
};

export default function(state = initialState, action) {
  switch(action.type){
    case GET_ITEMS:
      return {
        ...state
      };
    case DELETE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item.id !== action.payload)
      };
    case ADD_ITEM:
      return {
        ...state,
        items: [action.payload, ...state.items]
      };
    case EDIT_ITEM:
      let editedItem = state.items[action.payload.index];
      return {
        ...state,
        items: [
          ...state.items.slice(0, action.payload.index),
          {
            ...editedItem,
            name: action.payload.name,
            history: [
              {
                activityTime: new Date(),
                activityBy: 'Zakir',
                activityText: 'Edit Item!'
              },
              ...editedItem.history
            ]
          },
          ...state.items.slice(action.payload.index + 1)
        ]
      };
    case TOGGLE_PLAY:
        return {
          ...state,
          items: state.items.map(item => {
            if(item.id === action.payload) {
              item.play = !item.play
            }
            return item;
          })
        };

    default:
      return state
  }
}