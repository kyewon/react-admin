import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { ICategoryState, CategoryActions } from 'app/actions';

const initialState: RootState.CategoryState = {
  selectedIndex: 1,
  items: [
    {
      key: 1,
      name: '서버통신 샘플'
    },
    {
      key: 2,
      name: '두번째 주제'
    },
    {
      key: 3,
      name: '세번째 주제'
    },
  ],
}

export const categoryReducer = handleActions<RootState.CategoryState, ICategoryState>(
  {
    [CategoryActions.Type.CATEGORY_SELECTED_INDEX] : (state, action: CategoryActions.ReturnActionType | any) => {
      return {
        ...state,
        selectedIndex : action.payload
      }
    },
  },
  initialState
);