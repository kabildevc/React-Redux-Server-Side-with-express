import { userDetailWatcher } from './User/saga';
// import { getUserProfileDetails } from './User/saga';
import { all } from 'redux-saga/effects'
export default function* rootWatchers() {
  yield all([
    userDetailWatcher()
  ])
}
