
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import UserEditActionTypes from '../redux/actions/UserEditActionTypes';

// change with your service Path
const USEREDIT_SERVICE_PATH = 'service path';

// service query
const query = (baseUrl, params) => {
  // correct url
  const url = 'baseUrl/USEREDIT_SERVICE_PATH';
  return axios.post(url, params);
};

// parse response
const parseResponse = response => {
  console.log('submitUserEdit parse response : ', response);
  return {
    error: null,
    data: null,
  };
};

// saga worker
export default function* submitUserEdit(action) {
  try {
    // get action payload
    // remove if not need
    const params = action.payload;

    // get base url
    const baseUrl = '';

    // execute query
    const response = yield call(query, baseUrl, params);
    console.log('submitUserEdit response : ', response);

    // parse response
    const { error, data: userEdit } = parseResponse(response);
    console.log('submitUserEdit error : ', error);
    console.log('submitUserEdit data : ', userEdit);

    // update reducer with request status
    if (error) {
      yield put({ type: UserEditActionTypes.USEREDIT_FAILURE, error });
    } else {
      yield put({ type: UserEditActionTypes.USEREDIT_SUCCESS, userEdit });
    }
  } catch (error) {
    // update reducer with request status
    console.log('submitUserEdit exception error : ', error);
    yield put({ type: UserEditActionTypes.USEREDIT_FAILURE, error });
  }
}
