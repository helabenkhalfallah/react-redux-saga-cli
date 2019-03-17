
import { call, put } from 'redux-saga/effects';
import axios from 'axios';
import PhotoListActionTypes from '../redux/actions/PhotoListActionTypes';

// change with your service Path
const PHOTOLIST_SERVICE_PATH = 'service path';

// service query
const query = (baseUrl, params) => {
  // correct url
  const url = 'baseUrl/PHOTOLIST_SERVICE_PATH';
  return axios.get(url, params);
};

// parse response
const parseResponse = response => {
  console.log('requestPhotoList parse response : ', response);
  return {
    error: null,
    data: null,
  };
};

// saga worker
export default function* requestPhotoList() {
  try {
    // get action payload
    // remove if not need
    const params = null;

    // get base url
    const baseUrl = '';

    // execute query
    const response = yield call(query, baseUrl, params);
    console.log('requestPhotoList response : ', response);

    // parse response
    const { error, data: photos } = parseResponse(response);
    console.log('requestPhotoList error : ', error);
    console.log('requestPhotoList data : ', photos);

    // update reducer with request status
    if (error) {
      yield put({ type: PhotoListActionTypes.PHOTOLIST_FAILURE, error });
    } else {
      yield put({ type: PhotoListActionTypes.PHOTOLIST_SUCCESS, photos });
    }
  } catch (error) {
    // update reducer with request status
    console.log('requestPhotoList exception error : ', error);
    yield put({ type: PhotoListActionTypes.PHOTOLIST_FAILURE, error });
  }
}
