export default function(state = {}, action) {
  switch (action.type) {
    case 'test1':
      return {
        ...state,
        people: action.payload.data,
      };
    default:
      return state;
  }
}
