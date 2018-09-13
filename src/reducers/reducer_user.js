import {
  AUTHENTICATE,
  REGISTER,
  LOGOUT,
} from '../actions/index.js';

export default function(state = {}, action) {
  if (action.type === LOGOUT) {
    state = {};
  }
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
