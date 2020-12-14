import React from 'react'
import { IEmployee } from 'app/actions/employee'

export namespace Employee {
  export interface Props {
    employees: IEmployee[],
  }
}

export const Employee = ({ employees}: Employee.Props): JSX.Element => {
  return (
  <div>{JSON.stringify(employees)}</div>
  )
}