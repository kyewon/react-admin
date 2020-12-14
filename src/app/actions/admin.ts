import { useMemo } from 'react';
import { Dispatch, bindActionCreators } from 'redux';
import { createAction } from 'redux-actions';

export interface IAdminState {
  name: string,
  email: string,
  isAuthenticated: boolean,
}

export namespace AdminActions {
  
  export enum Type {
    ADMIN_LOGIN = 'ADMIN/LOGIN',
    ADMIN_LOGOUT = 'ADMIN/LOG_OUT',
  }

  export const adminLogin = createAction<IAdminState>(Type.ADMIN_LOGIN)
  export const adminLogout = createAction<IAdminState>(Type.ADMIN_LOGOUT)
  
  export type ReturnActionType = ReturnType<typeof adminLogin> | ReturnType<typeof adminLogout>
}

export const useAdminActions = (dispatch: Dispatch) => {
  const { Type, ...actions } = AdminActions;
  return useMemo(() => bindActionCreators(actions as any, dispatch), [dispatch])
}