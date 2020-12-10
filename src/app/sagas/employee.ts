import { takeLatest, call, put, all } from 'redux-saga/effects'
import { EmployeeActions, IEmployee } from 'app/actions/employee'
import axios from 'axios'

export const fetchEmployees = (): Promise<IEmployee> => {
  return axios.get('http://dummy.restapiexample.com/api/v1/employees')
    .then(res => {
      console.log('res=>', res.data.data)
      if (res.status !== 200) {
        throw new Error(res.statusText)
      }
      return res.data.data
    })
}

function* fetch() {
  try {
    const employees = yield call(fetchEmployees)
    yield put({ type: EmployeeActions.FETCH_EMPLOYEES.SUCCESS, payload: { employees: employees } })
  } catch (e) {
    yield put({ type: EmployeeActions.FETCH_EMPLOYEES.FAILURE, payload: { message: e.message } })
  }
}

export default function* root() {
  yield all([
    takeLatest(EmployeeActions.FETCH_EMPLOYEES.REQUEST, fetch),
  ]);
}