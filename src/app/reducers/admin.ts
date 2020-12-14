import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { IAdminState, AdminActions } from 'app/actions';

const initialState: RootState.AdminState = {
  name: 'tester',
  email: 'tester@mxxnlighter.com',
  isAuthenticated: true,
}

export const adminReducer = handleActions<RootState.AdminState, IAdminState>(
  {
    [AdminActions.Type.ADMIN_LOGIN] : (state, action: AdminActions.ReturnActionType) => {
      return {
        ...state,
        isAuthenticated: true
      }
    },
    [AdminActions.Type.ADMIN_LOGOUT] : (state, action: AdminActions.ReturnActionType) => {
      return {
        ...state,
        isAuthenticated: false
      }
    }
  },
  initialState
);