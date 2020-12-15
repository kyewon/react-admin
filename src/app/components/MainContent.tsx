import styled from 'styled-components';
import { Constants } from 'app/styleConstants'

export namespace MainContent {
  export const Wrapper = styled.div`
  position: fixed;
  align-items: center;
  top: ${Constants.Theme.headerHeight}px;
  left: ${Constants.Theme.categoryWidth};
  background-color: ${Constants.Theme.mainContentColor};
  height: 100%;
  width: ${Constants.Theme.mainContentWidth};
  
`;

export const Container = styled.div`
  height: 100%;
  width: 100%;
  padding: 3% 2% 0% 2%;
  align-items: center;
  justify-content: center;
  position: absolute;
`;
}
