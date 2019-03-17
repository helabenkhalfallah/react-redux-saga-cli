import { all, takeEvery } from 'redux-saga/effects';
import UserAddService from '../../users/services/UserAddService';
import UserAddActionTypes from '../../users/redux/actions/UserAddActionTypes';
import UserEditService from '../../users/services/UserEditService';
import UserEditActionTypes from '../../users/redux/actions/UserEditActionTypes';
import UserListService from '../../users/services/UserListService';
import UserListActionTypes from '../../users/redux/actions/UserListActionTypes';
import UserDeleteService from '../../users/services/UserDeleteService';
import UserDeleteActionTypes from '../../users/redux/actions/UserDeleteActionTypes';

// add here all saga service root
export default function* rootSaga() {
  yield all([
    takeEvery(UserDeleteActionTypes.USERDELETE_REQUEST, UserDeleteService),
    takeEvery(UserListActionTypes.USERLIST_REQUEST, UserListService),
    takeEvery(UserEditActionTypes.USEREDIT_REQUEST, UserEditService),
    takeEvery(UserAddActionTypes.USERADD_REQUEST, UserAddService),

  ]);
}
