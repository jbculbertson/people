import { combineReducers } from 'redux';
import PeopleReducer from './reducer_people';
import UserReducer from './reducer_user';

const rootReducer = combineReducers({
  people: PeopleReducer,
  user: UserReducer,
});

export default rootReducer;
