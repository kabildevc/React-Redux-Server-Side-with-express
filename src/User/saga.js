import { put, takeLatest, all } from 'redux-saga/effects';
import {GET_USER_DETAIL} from './actionType';
import {getUserDetailsSuccess, getUserDetailsFailure} from './actionCreator';
import { doGet} from '../service';

export function* getUserProfileDetails() {
  try {
    const response = yield doGet();
    yield put(getUserDetailsSuccess(response));
  } catch (error) {
    yield put(getUserDetailsFailure(error));
  }
}


export function* userDetailWatcher() {
  yield all([
    takeLatest(GET_USER_DETAIL, getUserProfileDetails),
  ]);
}
