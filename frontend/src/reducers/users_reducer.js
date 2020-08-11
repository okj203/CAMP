import { RECEIVE_USER_INFO } from '../actions/user_actions';

const UsersReducer = (state={}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
      case RECEIVE_USER_INFO:
        return { info: action.info.data };

      default:
        return state;
    }
}

export default UsersReducer;