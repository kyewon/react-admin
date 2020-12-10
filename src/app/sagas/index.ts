import { all, fork } from 'redux-saga/effects';
import employee from './employee'

/**
 * rootSaga
 */
export default function* root() {
  yield all([fork(employee)]);
}
