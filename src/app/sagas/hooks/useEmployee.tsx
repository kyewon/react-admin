import { useSelector, useDispatch } from 'react-redux'
import { EmployeeActions } from 'app/actions/employee'
import { IRootState } from 'app/reducers'

export const useEmployee = () => {
  const dispatch = useDispatch()
  const employeeState = useSelector((store: IRootState) => store.employees)

  const fetchEmployees = () => {
    dispatch(EmployeeActions.fetchEmployees.request(''))
  }

  return {
    employeeState,
    fetchEmployees
  }
}