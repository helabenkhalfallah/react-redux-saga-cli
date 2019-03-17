
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import UserDeleteActionTypes from '../redux/actions/UserDeleteActionTypes';

// change with your service Path
const USERDELETE_SERVICE_PATH = 'service path';

// service query
const query = (baseUrl, params) => {
  // correct url
  const url = 'baseUrl/USERDELETE_SERVICE_PATH';
  return axios.post(url, params);
};

// parse response
const parseResponse = response => {
  console.log('submitUserDelete parse response : ', response);
  return {
    error: null,
    data: null,
  };
};

// saga worker
export default function* submitUserDelete(action) {
  try {
    // get action payload
    // remove if not need
    const params = action.payload;

    // get base url
    const baseUrl = '';

    // execute query
    const response = yield call(query, baseUrl, params);
    console.log('submitUserDelete response : ', response);

    // parse response
    const { error, data: userDelete } = parseResponse(response);
    console.log('submitUserDelete error : ', error);
    console.log('submitUserDelete data : ', userDelete);

    // update reducer with request status
    if (error) {
      yield put({ type: UserDeleteActionTypes.USERDELETE_FAILURE, error });
    } else {
      yield put({ type: UserDeleteActionTypes.USERDELETE_SUCCESS, userDelete });
    }
  } catch (error) {
    // update reducer with request status
    console.log('submitUserDelete exception error : ', error);
    yield put({ type: UserDeleteActionTypes.USERDELETE_FAILURE, error });
  }
}
