import {
  BATCH_PERSON_CREATE,
  FETCH_PEOPLE,
} from '../actions/index.js';

export default function(state = {}, action) {
  console.log(action);
  switch (action.type) {
    case BATCH_PERSON_CREATE:
      return {
        ...state,
      };
    case FETCH_PEOPLE:
      return {
        ...state,
        people: action.payload.data.data,
      };
    default:
      return state;
  }
};
