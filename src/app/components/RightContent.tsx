import styled from 'styled-components';
import { Constants } from 'app/styleConstants'

export namespace RightContent {
  export const Wrapper = styled.div`
  position: fixed;
  align-items: right;
  top: ${Constants.Theme.headerHeight}px;
  right: 0;
  background-color: ${Constants.Theme.rightContentColor};
  height: 100%;
  width: ${Constants.Theme.rightContentWidth};
  
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 7% 2% 0% 2%;
  align-items: center;
  justify-content: center;
  position: absolute;
`;
}
