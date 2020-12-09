import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';
// import { SampleModel } from 'app/models';

export interface ISampleState {
  id: number;
  data: string;
}

export namespace SampleActions {
  
  // export const Type = {
  //   CHANGE_COMPLETED_ACTION : 'SAMPLE/CHANGE_COMPLETED_ACTION',
  //   ADD_ACTION : 'SAMPLE/ADD_ACTION',
  //   MINUS_ACTION : 'SAMPLE/DELETED_ACTION',
  // }
  export enum Type {
    CHANGE_COMPLETED_ACTION = 'SAMPLE/CHANGE_COMPLETED_ACTION',
    ADD_ACTION = 'SAMPLE/ADD_ACTION',
    MINUS_ACTION = 'SAMPLE/DELETED_ACTION',
  }

  export enum Filter {
    SHOW_DATA = 'show_data',
    HIDE_DATA = 'hide_data',
  }

  export const addItem = createAction<ISampleState>(Type.ADD_ACTION)
  export const minusItem = createAction<ISampleState>(Type.MINUS_ACTION)
  
  export type ReturnActionType = ReturnType<typeof addItem> | ReturnType<typeof minusItem>
}

export const useSampleActions = (dispatch: Dispatch) => {
  const { Type, Filter, ...actions } = SampleActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch])
}