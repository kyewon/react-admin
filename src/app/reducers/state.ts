import * as State from 'app/actions';

export interface IRootState {
  sample: RootState.SampleState,
  employees: RootState.EmployeeState,
  admin: RootState.AdminState,
}

export namespace RootState {
  export type SampleState = State.ISampleState[];
  export type EmployeeState = State.IEmployee[];
  export type AdminState = State.IAdminState;
}
