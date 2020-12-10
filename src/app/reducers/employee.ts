import { createReducer } from 'typesafe-actions'
import { RootState } from './state';
import { EmployeeActions } from 'app/actions/employee';

const initialState: RootState.EmployeeState = [
  {
    id: '',
    employee_name: '',
    employee_salary: '',
    employee_age: '',
    profile_image: '',
  }
];

export const employeeReducer = createReducer<RootState.EmployeeState, EmployeeActions.ReturnActionType>(initialState)
  .handleAction(EmployeeActions.fetchEmployees.success, (state, action) => {
    return { ...state, data: action.payload }
  })
  .handleAction(EmployeeActions.fetchEmployees.failure, (state, action) => {
    return { ...state, message: action.payload.message }
  })
  .handleAction(EmployeeActions.fetchEmployees.request, (state) => {
    return { ...state }
  })
