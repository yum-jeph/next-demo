import {INCREMENT, DECREMENT, RESET} from "../../actions/types"


const initialState = {
  count: 0,
}

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        count: state.count + 1
      });
    case DECREMENT:
      return Object.assign({}, state, {
        count: state.count - 1
      });
    case RESET:
      return Object.assign({}, state, {
        count: initialState.count
      });
    default:
      return state;
  }
};

export default reducer;
