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
    case TOGGLE_PLAY:
      if (state.id !== action.id) {
        return state
      }

      return {
        ...state,
        completed: !state.completed
      };
    default:
      return state
  }
}