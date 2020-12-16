import { ActionType, createAsyncAction } from 'typesafe-actions'
import { IRequest, IResponse, IError } from 'app/sagas/employee';

export interface IEmployee {
  id: number
  email: string
  first_name: string
  last_name: string
  avatar: string
}

export interface IEmployeeProfile {
  id: number
  name: string
  year: number
  color: string
  pantone_value: string
}

export namespace EmployeeActions {
  export enum GET_EMPLOYEE {
    REQUEST = 'GET_EMPLOYEE/REQUEST',
    SUCCESS = 'GET_EMPLOYEE/SUCCESS',
    FAILURE = 'GET_EMPLOYEE/FAILURE',
  }

  export enum FETCH_EMPLOYEES {
    REQUEST = 'EMPLOYEES/FETCH_REQUEST',
    SUCCESS = 'EMPLOYEES/FETCH_SUCCESS',
    FAILURE = 'EMPLOYEES/FETCH_FAILURE',
  }

  export const getEmployeeInfo = createAsyncAction(GET_EMPLOYEE.REQUEST, GET_EMPLOYEE.SUCCESS, GET_EMPLOYEE.FAILURE)<IRequest, IResponse, IError>()
  export const fetchEmployees = createAsyncAction(FETCH_EMPLOYEES.REQUEST, FETCH_EMPLOYEES.SUCCESS, FETCH_EMPLOYEES.FAILURE)<IRequest, IResponse, IError>()
  export type ReturnActionType = ActionType<typeof fetchEmployees> | ActionType<typeof getEmployeeInfo>
}