// import xxx from xx
import UserAddReducer from '../../users/redux/reducers/UserAddReducer';
import UserEditReducer from '../../users/redux/reducers/UserEditReducer';
import UserListReducer from '../../users/redux/reducers/UserListReducer';
import UserDeleteReducer from '../../users/redux/reducers/UserDeleteReducer';
import PhotoListReducer from '../../photos/redux/reducers/PhotoListReducer';

const ReducerRoot = [
  UserAddReducer,
  UserEditReducer,
  UserListReducer,
  UserDeleteReducer,
  PhotoListReducer,
];

export default ReducerRoot;
