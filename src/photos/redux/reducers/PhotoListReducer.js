import PhotoListActionTypes from '../actions/PhotoListActionTypes';

// reducer with initial state
const initialState = {
  loading: false,
  photos: null,
  error: null,
};

// PhotoList reducer
const PhotoListReducer = (state = initialState, action) => {
  console.log('PhotoListReducer action :', action);
  let newState = state;
  switch (action.type) {
    case PhotoListActionTypes.PHOTOLIST_REQUEST:
      newState = {
        ...state,
        loading: true,
        error: null,
      };
      break;
    case PhotoListActionTypes.PHOTOLIST_SUCCESS:
      newState = {
        ...state,
        loading: false,
        photos: action.photos,
      };
      break;
    case PhotoListActionTypes.PHOTOLIST_FAILURE:
      newState = {
        ...state,
        loading: false,
        photos: null,
        error: action.error,
      };
      break;
    default:
      newState = state;
  }

  console.log('PhotoListReducer newState :', newState);
  return newState;
};

export default PhotoListReducer;
