import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { IRootState } from 'app/reducers';
import { employeeColumns } from 'app/reducers/employee';
import { Constants } from 'app/styleConstants'
import { Sample, Employee, Header, GlobalStyle, Category, MainContent, RightContent, Home } from 'app/components';
import { useEmployee } from 'app/sagas/hooks/useEmployee'
import { Helmet } from 'react-helmet-async';
import { RouteComponentProps } from 'react-router-dom';

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
  useEffect(() => {
    fetchEmployees()
  }, [])

  const adminUser = useSelector((state: IRootState) => state.admin);
  const category = useSelector((state: IRootState) => state.category);
  const isLogin = adminUser.isAuthenticated

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
      {category.selectedIndex === 1 && MainWrapper(<Employee columns = {employeeColumns} employees = {employeeState.employees}/>) }
      {category.selectedIndex === 2 && MainWrapper(<div>1</div>) }
      {category.selectedIndex === 3 && MainWrapper(<div>click key 3</div>) }

      {RightWrapper(<div> in right area. {employeeState.employeeProfile.id !== 0 && <div>{JSON.stringify(employeeState.employeeProfile)}</div>} </div>)}
      <GlobalStyle/>
      </div>}
      {!isLogin && <Home/>}
    </div>
  );
};
