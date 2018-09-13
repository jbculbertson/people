import {
  BATCH_PERSON_CREATE,
} from '../actions/index.js';

export default function(state = {}, action) {
  switch (action.type) {
    case BATCH_PERSON_CREATE:
      return {
        ...state,
      };
    default:
      return state;
  }
};
