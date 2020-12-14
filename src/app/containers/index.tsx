import React from 'react'
import { useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router';
import { IRootState } from 'app/reducers';
import styled from 'styled-components';
import { Constants } from 'app/styleConstants'
import { Sample, Employee, Header, GlobalStyle } from 'app/components';
import { useEmployee } from 'app/sagas/hooks/useEmployee'

export namespace MainApp {
  export interface Props extends RouteComponentProps<void> {}
}

export const MainApp = ({ history, location, match }: MainApp.Props) => {
  // const { employeeState, fetchEmployees } = useEmployee()
  // useEffect(() => {
  //   fetchEmployees()
  //   console.log('employeeState=>', employeeState)
  // }, [])
  const adminUser = useSelector((state: IRootState) => state.admin);

  return (
    <div>
      <Header admin = {adminUser}/>
      <Sample />
      {/* <Employee employees= {employeeState} /> */}
      <GlobalStyle/>
    </div>
  );
};
