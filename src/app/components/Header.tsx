import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Constants } from 'app/styleConstants'
import { IAdminState, useAdminActions } from 'app/actions/admin'
import { Link } from 'react-router-dom'

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

const Logout = styled.div`
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

const LinkStyle = styled.span `
a {
  color: ${Constants.Theme.black};
}
&:hover {
  font-weight: bold;
  cursor: pointer;
}`;

export namespace Header {
  export interface Props {
    admin: IAdminState,
  }
}

export const Header = ({ admin }: Header.Props): JSX.Element =>  {

  const dispatch = useDispatch()
  const adminActions = useAdminActions(dispatch)
  const clickLogout = React.useCallback(
    () => adminActions.logout,
    []
  )

  return (
    <HeaderWrapper>
      <HeaderContainer>
        <div><h2>BOLD</h2></div>
        <Logout>
        <div>{admin.isAuthenticated ? 
        (<div>
          <span style={{paddingRight: '20px', color: Constants.Theme.black}}>{admin.email}</span>
          <LinkStyle onClick={clickLogout()}><Link to ='/'> logout </Link></LinkStyle>
        </div>) : (<span>TODO: 로그아웃처리</span>)}</div>
        </Logout>
      </HeaderContainer>
    </HeaderWrapper>
  )
}