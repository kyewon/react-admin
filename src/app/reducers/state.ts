import * as State from 'app/actions';

export interface IRootState {
  sample: RootState.SampleState,
  employees: RootState.EmployeeState,
  admin: RootState.AdminState,
  category: RootState.CategoryState,
}

export namespace RootState {
  export type SampleState = State.ISampleState[];
  export type EmployeeState = State.IEmployee[];
  export type AdminState = State.IAdminState;
  export type CategoryState = State.ICategoryState;
}
