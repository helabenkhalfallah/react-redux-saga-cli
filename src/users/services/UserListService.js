
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import UserListActionTypes from '../redux/actions/UserListActionTypes';

// change with your service Path
const USERLIST_SERVICE_PATH = 'service path';

// service query
const query = (baseUrl, params) => {
  // correct url
  const url = 'baseUrl/USERLIST_SERVICE_PATH';
  return axios.get(url, params);
};

// parse response
const parseResponse = response => {
  console.log('requestUserList parse response : ', response);
  return {
    error: null,
    data: null,
  };
};

// saga worker
export default function* requestUserList() {
  try {
    // get action payload
    // remove if not need
    const params = .payload;

    // get base url
    const baseUrl = '';

    // execute query
    const response = yield call(query, baseUrl, params);
    console.log('requestUserList response : ', response);

    // parse response
    const { error, data: users } = parseResponse(response);
    console.log('requestUserList error : ', error);
    console.log('requestUserList data : ', users);

    // update reducer with request status
    if (error) {
      yield put({ type: UserListActionTypes.USERLIST_FAILURE, error });
    } else {
      yield put({ type: UserListActionTypes.USERLIST_SUCCESS, users });
    }
  } catch (error) {
    // update reducer with request status
    console.log('requestUserList exception error : ', error);
    yield put({ type: UserListActionTypes.USERLIST_FAILURE, error });
  }
}
