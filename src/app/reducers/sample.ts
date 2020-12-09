import { handleActions } from 'redux-actions';
import { RootState } from './state';
import { ISampleState, SampleActions } from 'app/actions';

const initialState: RootState.SampleState = [
  {id: 1, data: 'a'},
  {id: 2, data: 'b'},
  {id: 3, data: 'c'},
];

export const sampleReducer = handleActions<RootState.SampleState, ISampleState>(
  {
    [SampleActions.Type.ADD_ACTION] : (state, action: SampleActions.ReturnActionType) => {
      state.push(action.payload)
      return state
    },
    [SampleActions.Type.MINUS_ACTION] : (state, action: SampleActions.ReturnActionType) => {
      state.splice(state.length -1, 1)
      return state
    }
  },
  initialState
);