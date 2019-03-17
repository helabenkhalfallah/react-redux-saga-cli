import UserDeleteActionTypes from '../actions/UserDeleteActionTypes';

// reducer with initial state
const initialState = {
  loading: false,
  userDelete: null,
  error: null,
};

// UserDelete reducer
const UserDeleteReducer = (state = initialState, action) => {
  console.log('UserDeleteReducer action :', action);
  let newState = state;
  switch (action.type) {
    case UserDeleteActionTypes.USERDELETE_REQUEST:
      newState = {
        ...state,
        loading: true,
        error: null,
      };
      break;
    case UserDeleteActionTypes.USERDELETE_SUCCESS:
      newState = {
        ...state,
        loading: false,
        userDelete: action.userDelete,
      };
      break;
    case UserDeleteActionTypes.USERDELETE_FAILURE:
      newState = {
        ...state,
        loading: false,
        userDelete: null,
        error: action.error,
      };
      break;
    default:
      newState = state;
  }

  console.log('UserDeleteReducer newState :', newState);
  return newState;
};

export default UserDeleteReducer;
