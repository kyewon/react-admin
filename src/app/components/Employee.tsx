import React from 'react'
import { useDispatch } from 'react-redux'
import { EmployeeActions } from 'app/actions/employee'
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
  employees: RowModel[],
}

export const Employee = ({columns, employees }: Props): JSX.Element => {
  const dispatch = useDispatch()
  const selectRowListener = React.useCallback(
    (data: any) => {
      const id: string = data.data.id
      dispatch(EmployeeActions.getEmployeeInfo.request(id))
    },
    []
  )

  return (
    <Wrapper>
      <div>in Employee info table</div>
      <DataGrid columns={columns} rows={employees} autoHeight pageSize={3} onRowSelected={(data) => selectRowListener(data) } />
    </Wrapper>
  )
}