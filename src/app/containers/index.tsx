import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { IRootState } from 'app/reducers';
import { Constants } from 'app/styleConstants'
import { Sample, Employee, Header, GlobalStyle, Category, MainContent, RightContent, Home, ProductTable } from 'app/components';
import { useEmployee } from 'app/sagas/hooks/useEmployee'
import { Helmet } from 'react-helmet-async';
import { Router, Switch, Route, RouteComponentProps, Redirect } from 'react-router-dom';

const MainWrapper = (component: any) => {
  return (
  <div><MainContent.Wrapper>
    <MainContent.Container>
      {component}
    </MainContent.Container>
    </MainContent.Wrapper></div>
  )
}
const RightWrapper = (component: any) => {
  return (
  <div><RightContent.Wrapper>
    <RightContent.Container>
      {component}
    </RightContent.Container>
    </RightContent.Wrapper></div>
  )
}

export namespace MainApp {
  export interface Props extends RouteComponentProps<void> {}
}

export const MainApp = ({ history, location, match }: MainApp.Props) => {
  // console.log('MainApp match => ', match)
  const { employeeState, fetchEmployees } = useEmployee()
  console.log('in containers employeeState=>', employeeState)
  // useEffect(() => {
  //   fetchEmployees()
  // }, [])

  const adminUser = useSelector((state: IRootState) => state.admin);
  const category = useSelector((state: IRootState) => state.category);
  const isLogin = adminUser.isAuthenticated
  const employeeColumns = [
  {
    field: 'id',
    headerName: 'Id',
    width: 50,
  },
  {
    field: 'employee_name',
    headerName: 'Name',
    width: 80,
  },
  {
    field: 'employee_age',
    headerName: 'Age',
    width: 50,
  },
  {
    field: 'employee_salary',
    headerName: 'Salary',
    width: 80,
  },
  {
    field: 'profile_image',
    headerName: 'Image',
    width: 120,
  },
]
const EMPLOYEES_MOCK = [
  {
      "id": 1,
      "employee_name": "Tiger Nixon",
      "employee_salary": 320800,
      "employee_age": 61,
      "profile_image": ""
  },
  {
      "id": 2,
      "employee_name": "Garrett Winters",
      "employee_salary": 170750,
      "employee_age": 63,
      "profile_image": ""
  },
  {
      "id": 3,
      "employee_name": "Ashton Cox",
      "employee_salary": 86000,
      "employee_age": 66,
      "profile_image": ""
  },
  {
      "id": 4,
      "employee_name": "Cedric Kelly",
      "employee_salary": 433060,
      "employee_age": 22,
      "profile_image": ""
  },
  {
      "id": 5,
      "employee_name": "Airi Satou",
      "employee_salary": 162700,
      "employee_age": 33,
      "profile_image": ""
  }]

  return (
    <div>
      {isLogin && <div>
      <Helmet
        defer={false}
        encodeSpecialCharacters={true}
        defaultTitle={Constants.Theme.appName}
        titleAttributes={{ itemprop: 'name', lang: 'pt-br' }}
            />
      <Header admin = {adminUser}/>
      <Category category = {category}/>
      {category.selectedIndex === 1 && MainWrapper(<div>1</div>) }
      {/* {category.selectedIndex === 1 && MainWrapper(<ProductTable columns = {adminColumns} product = {adminUser}/>) } */}
      {category.selectedIndex === 2 && MainWrapper(<ProductTable columns = {employeeColumns} product = {EMPLOYEES_MOCK}/>) }
      {/* {category.selectedIndex === 2 && MainWrapper(<ProductTable columns = {employeeColumns} product = {employeeState.employees}/>) } */}
      {category.selectedIndex === 3 && MainWrapper(<div>click key 3</div>) }

      {RightWrapper(<div>in right area.</div>)}
      {/* <Employee employees= {employeeState} /> */}
      <GlobalStyle/>
      </div>}
      {!isLogin && <Home/>}
    </div>
  );
};
