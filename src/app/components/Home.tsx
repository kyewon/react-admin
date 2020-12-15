import React from 'react'
import styled from 'styled-components';
import { Constants } from 'app/styleConstants'
import { Link } from 'react-router-dom'

const HomeWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
`;

const HomeContainer = styled.div`
  /* 레이아웃 */
  flex: 1;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
  right: 0;
  padding-top: ${Constants.Theme.headerHeight}px;
  overflow-y: scroll;
  margin: 0 auto;

  background: white;
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

export const Home = (): JSX.Element =>  {
  return (
    <HomeWrapper>
      <div>데모버전입니다.</div>
      <div>버튼클릭시 로그인 됩니다.</div>

      <div><LinkStyle><Link to ='/main'> LOGIN </Link></LinkStyle></div>
    </HomeWrapper>
  )
}