import UserEditActionTypes from '../actions/UserEditActionTypes';

// reducer with initial state
const initialState = {
  loading: false,
  userEdit: null,
  error: null,
};

// UserEdit reducer
const UserEditReducer = (state = initialState, action) => {
  console.log('UserEditReducer action :', action);
  let newState = state;
  switch (action.type) {
    case UserEditActionTypes.USEREDIT_REQUEST:
      newState = {
        ...state,
        loading: true,
        error: null,
      };
      break;
    case UserEditActionTypes.USEREDIT_SUCCESS:
      newState = {
        ...state,
        loading: false,
        userEdit: action.userEdit,
      };
      break;
    case UserEditActionTypes.USEREDIT_FAILURE:
      newState = {
        ...state,
        loading: false,
        userEdit: null,
        error: action.error,
      };
      break;
    default:
      newState = state;
  }

  console.log('UserEditReducer newState :', newState);
  return newState;
};

export default UserEditReducer;
