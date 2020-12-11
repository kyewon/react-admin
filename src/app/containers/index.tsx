import React, { useEffect } from 'react'
import { RouteComponentProps } from 'react-router';
import { Sample, Employee } from 'app/components';
import { useEmployee } from 'app/sagas/hooks/useEmployee'

export namespace MainApp {
  export interface Props extends RouteComponentProps<void> {}
}

export const MainApp = ({ history, location, match }: MainApp.Props) => {
  console.log('RouteComponentProps match =>', match)
  console.log('RouteComponentProps history =>', history)
  console.log('RouteComponentProps location =>', location)
  const { employeeState, fetchEmployees } = useEmployee()
  useEffect(() => {
    fetchEmployees()
    console.log('employeeState=>', employeeState)
  }, [])

  return (
    <div>
      <h1> in containers.</h1>
      <Sample />
      <Employee employees= {employeeState} />
    </div>
  );
};
