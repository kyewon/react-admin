import React from 'react'
import { useDispatch } from 'react-redux'
import styled from 'styled-components'
import { Constants } from 'app/styleConstants'
import { ICategoryState, useCategoryActions } from 'app/actions/category'

const CategoryWrapper = styled.div`
  background-color: ${Constants.Theme.categoryColor};
  margin-top: ${Constants.Theme.headerHeight}px;
  height: 100%;
  width: ${Constants.Theme.categoryWidth};
  position: fixed;

`;

const CategoryContainer = styled.div`
  height: 100%;
  padding: 5% 2% 0% 2%;
  align-items: center;
  justify-content: center;
  position: fixed;
`;

const ItemStyle = styled.div`
  &:hover {
    font-weight: bold;
    cursor: pointer;
  }
`
export interface Props {
  category: ICategoryState,
}

export const Category = ({ category }: Props): JSX.Element =>  {
  const dispatch = useDispatch()
  const categoryActions = useCategoryActions(dispatch)
  const clickItemListener = React.useCallback(
    (key: number) => {
      categoryActions.selectedIndex(key)
    },
    [category]
  )

  return (
    <CategoryWrapper>
      <CategoryContainer>
        {category.items.map(item => {return <div key={item.key} onClick={() => clickItemListener(item.key)}><ItemStyle><div style={{padding: '5px 5px 20px 5px'}}> {item.name} </div></ItemStyle></div>})}
        {/* {category.items.map(item => {return <Link to={`/category/${item.key}`} key={item.key} onClick={() => clickItemListener(item.key)}><ItemStyle><div style={{padding: '5px 5px 20px 5px'}}> {item.name} </div></ItemStyle></Link>})} */}
      </CategoryContainer>
    </CategoryWrapper>
  )
}