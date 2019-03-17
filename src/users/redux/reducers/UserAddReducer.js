import UserAddActionTypes from '../actions/UserAddActionTypes';

// reducer with initial state
const initialState = {
  loading: false,
  userAdd: null,
  error: null,
};

// UserAdd reducer
const UserAddReducer = (state = initialState, action) => {
  console.log('UserAddReducer action :', action);
  let newState = state;
  switch (action.type) {
    case UserAddActionTypes.USERADD_REQUEST:
      newState = {
        ...state,
        loading: true,
        error: null,
      };
      break;
    case UserAddActionTypes.USERADD_SUCCESS:
      newState = {
        ...state,
        loading: false,
        userAdd: action.userAdd,
      };
      break;
    case UserAddActionTypes.USERADD_FAILURE:
      newState = {
        ...state,
        loading: false,
        userAdd: null,
        error: action.error,
      };
      break;
    default:
      newState = state;
  }

  console.log('UserAddReducer newState :', newState);
  return newState;
};

export default UserAddReducer;
