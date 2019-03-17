// import xxx from xx
import UserAddReducer from '../../users/redux/reducers/UserAddReducer';
import UserEditReducer from '../../users/redux/reducers/UserEditReducer';
import UserListReducer from '../../users/redux/reducers/UserListReducer';

const ReducerRoot = [
  UserAddReducer,
  UserEditReducer,
  UserListReducer,
];

export default ReducerRoot;
