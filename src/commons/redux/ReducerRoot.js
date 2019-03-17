// import xxx from xx
import UserAddReducer from '../../users/redux/reducers/UserAddReducer';
import UserEditReducer from '../../users/redux/reducers/UserEditReducer';
import UserListReducer from '../../users/redux/reducers/UserListReducer';
import UserDeleteReducer from '../../users/redux/reducers/UserDeleteReducer';

const ReducerRoot = [
  UserAddReducer,
  UserEditReducer,
  UserListReducer,
  UserDeleteReducer,
];

export default ReducerRoot;
