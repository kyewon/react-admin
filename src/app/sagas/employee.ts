import { takeLatest, call, put, all } from 'redux-saga/effects'
import { EmployeeActions, IEmployee, IEmployeeProfile } from 'app/actions/employee'
import axios from 'axios'

export interface IRequest {}

export interface IResponse {
  status: string,
  employees: IEmployee[],
  employeeProfile: IEmployeeProfile,
  message: string,
}

export interface IError {
  message: string
}

export const fetchEmployees = (): Promise<IResponse> => {
  return axios.get('https://reqres.in/api/users')
    .then(res => {
      if (res.status !== 200) {
        throw new Error(res.statusText)
      }
      return JSON.parse(res.request.response) as Promise<IResponse>
    })
}

export const fetchEmployeeById = (id: any): Promise<IResponse> => {
  return axios.get('https://reqres.in/api/user/' + id)
    .then(res => {
      if (res.status !== 200) {
        throw new Error(res.statusText)
      }
      return JSON.parse(res.request.response) as Promise<IResponse>
    })
}

function* fetchAll() {
  try {
    const employees = yield call(fetchEmployees)
    yield put({ type: EmployeeActions.FETCH_EMPLOYEES.SUCCESS, payload: { employees: employees.data } })
  } catch (e) {
    yield put({ type: EmployeeActions.FETCH_EMPLOYEES.FAILURE, payload: { message: e.message } })
  }
}

function* fetchById({ payload }: any) {
  try {
    const employee = yield call(() => fetchEmployeeById(payload))
    yield put({ type: EmployeeActions.GET_EMPLOYEE.SUCCESS, payload: { employeeProfile : employee.data } })
  } catch (e) {
    yield put({ type: EmployeeActions.GET_EMPLOYEE.FAILURE, payload: { message: e.message } })
  }
}

export default function* root() {
  yield all([
    takeLatest(EmployeeActions.FETCH_EMPLOYEES.REQUEST, fetchAll),
    takeLatest(EmployeeActions.GET_EMPLOYEE.REQUEST, fetchById),
  ]);
}