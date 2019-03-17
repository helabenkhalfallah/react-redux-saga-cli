import UserListActionTypes from '../actions/UserListActionTypes';

// reducer with initial state
const initialState = {
  loading: false,
  users: null,
  error: null,
};

// UserList reducer
const UserListReducer = (state = initialState, action) => {
  console.log('UserListReducer action :', action);
  let newState = state;
  switch (action.type) {
    case UserListActionTypes.USERLIST_REQUEST:
      newState = {
        ...state,
        loading: true,
        error: null,
      };
      break;
    case UserListActionTypes.USERLIST_SUCCESS:
      newState = {
        ...state,
        loading: false,
        users: action.users,
      };
      break;
    case UserListActionTypes.USERLIST_FAILURE:
      newState = {
        ...state,
        loading: false,
        users: null,
        error: action.error,
      };
      break;
    default:
      newState = state;
  }

  console.log('UserListReducer newState :', newState);
  return newState;
};

export default UserListReducer;
