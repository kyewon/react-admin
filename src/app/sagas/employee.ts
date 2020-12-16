import { takeLatest, call, put, all } from 'redux-saga/effects'
import { EmployeeActions, IEmployee } from 'app/actions/employee'
import axios from 'axios'

export interface IRequest {}

export interface IResponse {
  status: string,
  employees: IEmployee[],
  message: string,
}

export interface IError {
  message: string
}

export const fetchEmployees = (): Promise<IResponse> => {
  return axios.get('http://dummy.restapiexample.com/api/v1/employees')
    .then(res => {
      if (res.status !== 200) {
        throw new Error(res.statusText)
      }
      return JSON.parse(res.request.response) as Promise<IResponse>
    })
}

function* fetch() {
  try {
    const employees = yield call(fetchEmployees)
    yield put({ type: EmployeeActions.FETCH_EMPLOYEES.SUCCESS, payload: {status: employees.status, employees: employees.data, message: employees.message } })
  } catch (e) {
    yield put({ type: EmployeeActions.FETCH_EMPLOYEES.FAILURE, payload: { message: e.message } })
  }
}

export default function* root() {
  yield all([
    takeLatest(EmployeeActions.FETCH_EMPLOYEES.REQUEST, fetch),
  ]);
}