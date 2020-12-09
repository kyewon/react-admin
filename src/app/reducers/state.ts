import * as State from 'app/actions';

export interface IRootState {
  sample: RootState.SampleState,
}

export namespace RootState {
  export type SampleState = State.ISampleState[];
}
