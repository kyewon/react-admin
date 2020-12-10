import { ActionType, createAsyncAction } from 'typesafe-actions'
import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { IRequest, IResponse, IError } from 'app/sagas/api.interface';

export interface IEmployee {
  id: string
  employee_name: string
  employee_salary: string
  employee_age: string
  profile_image: string
}

export namespace EmployeeActions {
  export enum FETCH_EMPLOYEES {
    REQUEST = 'EMPLOYEES/FETCH_REQUEST',
    SUCCESS = 'EMPLOYEES/FETCH_SUCCESS',
    FAILURE = 'EMPLOYEES/FETCH_FAILURE'
  }

  export const fetchEmployees = createAsyncAction(FETCH_EMPLOYEES.REQUEST, FETCH_EMPLOYEES.SUCCESS, FETCH_EMPLOYEES.FAILURE)<IRequest, IResponse, IError>()
  export type ReturnActionType = ActionType<typeof fetchEmployees>
}

export const useEmployeeActions = (dispatch: Dispatch) => {
  const { FETCH_EMPLOYEES, ...actions } = EmployeeActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch])
}