import { combineReducers } from 'redux';
import { IRootState } from './state';
import { sampleReducer } from './sample';
import { employeeReducer } from './employee';
import { adminReducer } from './admin';

export * from './state';

export const rootReducer = combineReducers<IRootState>({
  sample: sampleReducer,
  employees: employeeReducer,
  admin: adminReducer,
});
