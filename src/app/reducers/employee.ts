import { createReducer } from 'typesafe-actions'
import { RootState } from './state';
import { EmployeeActions } from 'app/actions/employee';

const initialState: RootState.EmployeeState = {status: '', employees: [], message: '' }

export const employeeReducer = createReducer<RootState.EmployeeState, EmployeeActions.ReturnActionType>(initialState)
  .handleAction(EmployeeActions.fetchEmployees.success, (state, action) => {
    return { ...state, status: action.payload.status, employees: action.payload.employees, message: action.payload.message}
  })
  .handleAction(EmployeeActions.fetchEmployees.failure, (state, action) => {
    return { ...state, message: action.payload.message }
  })
  .handleAction(EmployeeActions.fetchEmployees.request, (state) => {
    return { ...state }
  })
