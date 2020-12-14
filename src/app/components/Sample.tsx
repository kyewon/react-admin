import React from 'react'
import styled from 'styled-components';
import { Constants } from 'app/styleConstants'

const Wrapper = styled.div`
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

export const Sample = (): JSX.Element =>  {
  return (
    <Wrapper>
      <div>in sample area</div>
    </Wrapper>
  )
}