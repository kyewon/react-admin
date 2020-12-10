import * as State from 'app/actions';

export interface IRootState {
  sample: RootState.SampleState,
  employees: RootState.EmployeeState,
}

export namespace RootState {
  export type SampleState = State.ISampleState[];
  export type EmployeeState = State.IEmployee[];
}
