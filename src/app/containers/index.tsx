import React from 'react'
import { useSelector } from 'react-redux'
import { RouteComponentProps } from 'react-router';
import { IRootState } from 'app/reducers';
import styled from 'styled-components';
import { Constants } from 'app/styleConstants'
import { Sample, Employee, Header, GlobalStyle, Category, MainContent, RightContent } from 'app/components';
import { useEmployee } from 'app/sagas/hooks/useEmployee'
import { Helmet } from 'react-helmet-async';

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
  const category = useSelector((state: IRootState) => state.category);

  return (
    <div>
      <Helmet
              defer={false}
              // htmlAttributes={{ lang: 'pt-br' }}
              encodeSpecialCharacters={true}
              defaultTitle={Constants.Theme.appName}
              titleAttributes={{ itemprop: 'name', lang: 'pt-br' }}
            />
      <Header admin = {adminUser}/>
      <Category category = {category}/>
      <MainContent.Wrapper>
        <MainContent.Container>
          <div>MainContent area!!!</div>
        </MainContent.Container>
      </MainContent.Wrapper>
      <RightContent.Wrapper>
        <RightContent.Container>
          <div>RightContent area!!!</div>
        </RightContent.Container>
      </RightContent.Wrapper>
      {/* <Employee employees= {employeeState} /> */}
      <GlobalStyle/>
    </div>
  );
};
