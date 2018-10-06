import uuid from "uuid";
import { ADD_ITEM, GET_ITEMS, EDIT_ITEM, DELETE_ITEM, ADD_COMMENT, TOGGLE_PLAY } from "../actions/types";

const initialState = {
  items: [
    {id: uuid(), name: 'Emails', created_time: new Date(),
      play: false,
      comments: [],
      history:[
        {
          activityTime: new Date('2018', '10', '01'),
          activityBy: 'Zakir',
          activityTitle: 'Campaign Created!',
          activityType: 'create',
          activityBody: ''
        }
      ]},
    {id: uuid(), name: 'Push Notifications', created_time: new Date(),
      play: false,
      comments: [],
      history:[
        {
          activityTime: new Date('2018', '10', '01'),
          activityBy: 'Zakir',
          activityTitle: 'Campaign Created!',
          activityType: 'create',
          activityBody: ''
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
      debugger;
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
                activityTitle: 'Campaign Renamed!',
                activityType: 'rename',
                activityBody: action.payload.name
              },
              ...editedItem.history
            ]
          },
          ...state.items.slice(action.payload.index + 1)
        ]
      };
    case ADD_COMMENT:
      let commentedItem = state.items[action.payload.index];
      return {
        ...state,
        items: [
          ...state.items.slice(0, action.payload.index),
          {
            ...commentedItem,
            history: [
              {
                activityTime: new Date(),
                activityBy: 'Zakir',
                activityTitle: 'Comment Added!',
                activityType: 'comment',
                activityBody: action.payload.comment
              },
              ...commentedItem.history
            ],
            comments: [
              {
                commentTime: new Date(),
                commentBy: 'Zakir',
                commentText: action.payload.comment
              },
              ...commentedItem.comments
            ]
          },
          ...state.items.slice(action.payload.index + 1)
        ]
      };
    case TOGGLE_PLAY:
      debugger;
      let toggledItem = state.items[action.payload.index];
        return {
          ...state,
          items: [
            ...state.items.slice(0, action.payload.index),
            {
              ...toggledItem,
              history: [
                {
                  activityTime: new Date(),
                  activityBy: 'Zakir',
                  activityTitle: action.payload.play ? 'Campaign Resumed' : 'Campaign Paused',
                  activityType: action.payload.play ? 'play' : 'pause',
                  activityBody: ''
                },
                ...toggledItem.history
              ],
              play: !action.payload.play,
              ...toggledItem.play
            },
            ...state.items.slice(action.payload.index + 1)
          ]

          /*items: state.items.map(item => {
            if(item.id === action.payload) {
              item.play = !item.play
            }
            return item;
          })*/
        };

    default:
      return state
  }
}