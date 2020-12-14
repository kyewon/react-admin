import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';

export interface ICategoryState {
  selectedIndex: number,
  items: {
    key: number,
    name: string,
  }[],
}

export namespace CategoryActions {
  
  export enum Type {
    CATEGORY_SELECTED_INDEX = 'CATEGORY/SELECTED_INDEX',
  }

  export const selectedIndex = createAction<ICategoryState>(Type.CATEGORY_SELECTED_INDEX)
  
  export type ReturnActionType = ReturnType<typeof selectedIndex>
}

export const useCategoryActions = (dispatch: Dispatch) => {
  const { Type, ...actions } = CategoryActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch])
}