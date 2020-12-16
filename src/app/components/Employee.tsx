import React from 'react'
import { IEmployee } from 'app/actions/employee'

export interface Props {
  employees: IEmployee[],
}

export const Employee = ({ employees}: Props): JSX.Element => {
  return (
  <div>{JSON.stringify(employees)}</div>
  )
}