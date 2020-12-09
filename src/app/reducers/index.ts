import { combineReducers } from 'redux';
import { IRootState } from './state';
import { sampleReducer } from './sample';

export * from './state';

export const rootReducer = combineReducers<IRootState>({
  sample: sampleReducer,
});
