
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import UserAddActionTypes from '../redux/actions/UserAddActionTypes';

// change with your service Path
const USERADD_SERVICE_PATH = 'service path';

// service query
const query = (baseUrl, params) => {
  // correct url
  const url = 'baseUrl/USERADD_SERVICE_PATH';
  return axios.post(url, params);
};

// parse response
const parseResponse = response => {
  console.log('submitUserAdd parse response : ', response);
  return {
    error: null,
    data: null,
  };
};

// saga worker
export default function* submitUserAdd(action) {
  try {
    // get action payload
    // remove if not need
    const params = action.payload;

    // get base url
    const baseUrl = '';

    // execute query
    const response = yield call(query, baseUrl, params);
    console.log('submitUserAdd response : ', response);

    // parse response
    const { error, data: userAdd } = parseResponse(response);
    console.log('submitUserAdd error : ', error);
    console.log('submitUserAdd data : ', userAdd);

    // update reducer with request status
    if (error) {
      yield put({ type: UserAddActionTypes.USERADD_FAILURE, error });
    } else {
      yield put({ type: UserAddActionTypes.USERADD_SUCCESS, userAdd });
    }
  } catch (error) {
    // update reducer with request status
    console.log('submitUserAdd exception error : ', error);
    yield put({ type: UserAddActionTypes.USERADD_FAILURE, error });
  }
}
