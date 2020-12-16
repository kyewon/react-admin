import React from 'react'
import styled from 'styled-components';
import { Constants } from 'app/styleConstants'
import { DataGrid, ColDef, RowModel } from '@material-ui/data-grid';

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

export interface Props {
  columns: ColDef[],
  product: RowModel[],
}

export const ProductTable = ({columns, product }: Props): JSX.Element =>  {
  return (
    <Wrapper>
      <div>in ProductTable</div>
      <DataGrid columns={columns} rows={product} checkboxSelection onRowSelected={(data) =>{
          console.log('data =>', data.data)
      }} />
    </Wrapper>
  )
}