import {
  AUTHENTICATE,
  REGISTER,
} from '../actions/index.js';

export default function(state = {}, action) {
  switch (action.type) {
    case AUTHENTICATE:
      return {
        ...state,
        currentUser: action.payload.data,
      };
    case REGISTER:
      return {
        ...state,
        currentUser: action.payload.data,
      };
    default:
      return state;
  }
}
