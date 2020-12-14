import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Constants } from 'app/styleConstants'
import { IAdminState, useAdminActions } from 'app/actions/admin'

const HeaderWrapper = styled.header`
  background-color: ${Constants.Theme.headerColor};
  height: ${Constants.Theme.headerHeight}px;
  left: 0;
  position: fixed;
  right: 0;
  top: 0;

`;

const HeaderContainer = styled.div`
  align-items: center;
  display: flex;
  flex-wrap: wrap;
  height: 100%;
  justify-content: space-between;
  padding-bottom: 2px;
  padding-top: 2px;
  padding-left: 6px;
  padding-right: 6px;
`;

const Logout = styled.button`
  align-items: center;
  color: #fff;
  display: flex;
  font-size: 1.3rem;
  padding: 2px;

  &.active {
    color: #fff;
  }

  span {
    display: inline-block;
    margin-right: 0.4rem;
    text-transform: uppercase;
  }
`;

export namespace Header {
  export interface Props {
    admin: IAdminState,
  }
}

export const Header = ({ admin }: Header.Props): JSX.Element =>  {

  const dispatch = useDispatch()
  const adminActions = useAdminActions(dispatch)
  // const clickLogout = () => adminActions.adminLogout
  const clickLogout = React.useCallback(
    () => adminActions.adminLogout,
    [admin]
  )

  const checkedLogIn = React.useCallback((isAuthenticated: boolean): JSX.Element => {
    return ((isAuthenticated) ? (<div><span>{admin.name}</span><span>logout</span></div>) 
    : (<span>login</span>)
  )}, [admin])

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <div><h2>BOLD</h2></div>
        <Logout onClick={clickLogout()}>
        {/* {checkedLogIn(admin.isAuthenticated)} */}
        <div>{admin.isAuthenticated ? 
        (<div>
          <span style={{paddingRight: '20px'}}>{admin.email}</span>
          <span>logout</span>
        </div>) : (<span>TODO: 로그아웃처리</span>)}</div>
        </Logout>
      </HeaderContainer>
    </HeaderWrapper>
  )
}