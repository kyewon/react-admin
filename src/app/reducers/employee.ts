import { createReducer } from 'typesafe-actions'
import { RootState } from './state';
import { EmployeeActions } from 'app/actions/employee';

const initialEmployee = { id: 0, email: '', first_name: '', last_name: '', avatar: '' }
const initialState: RootState.EmployeeState = {
  employees: [initialEmployee],
  employeeProfile: {id: 0, name: '', year: 0, color: '', pantone_value: '', info: initialEmployee } 
}

export const employeeReducer = createReducer<RootState.EmployeeState, EmployeeActions.ReturnActionType>(initialState)
  .handleAction(EmployeeActions.fetchEmployees.success, (state, action) => {
    return { ...state, employees: action.payload.employees }
  })
  .handleAction(EmployeeActions.fetchEmployees.failure, (state, action) => {
    return { ...state, message: action.payload.message }
  })
  .handleAction(EmployeeActions.fetchEmployees.request, (state) => {
    return { ...state }
  })

  .handleAction(EmployeeActions.getEmployeeInfo.success, (state, action) => {
    return { ...state,  employeeProfile: action.payload.employeeProfile}
  })
  .handleAction(EmployeeActions.getEmployeeInfo.failure, (state, action) => {
    return { ...state, message: action.payload.message }
  })
  .handleAction(EmployeeActions.getEmployeeInfo.request, (state) => {
    return { ...state }
  })

export const employeeColumns = [
  {
    field: 'id',
    headerName: 'Id',
    type: 'number',
    width: 50,
  },
  {
    field: 'email',
    headerName: 'Email',
    width: 150,
  },
  {
    field: 'first_name',
    headerName: 'FirstName',
    width: 80,
  },
  {
    field: 'last_name',
    headerName: 'LastName',
    width: 80,
  },
  {
    field: 'avatar',
    headerName: 'Avatar',
    width: 250,
  },
]