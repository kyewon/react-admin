import React from 'react';
// import style from './style.css';
import { RouteComponentProps } from 'react-router';
// import { useSelector } from 'react-redux';
// import { useSampleActions } from 'app/actions';
// import { IRootState } from 'app/reducers';
import { Sample } from 'app/components';
// import useEmployee from '../../sagas/api/hooks/useEmployee'

export namespace MainApp {
  export interface Props extends RouteComponentProps<void> {}
}

export const MainApp = ({ history, location }: MainApp.Props) => {
  // const dispatch = useDispatch();
  // const sampleActions = useSampleActions(dispatch);
  // const { sample } = useSelector((state: IRootState) => {
  //   console.log('useSelector sample=>', sample)
  //   return {
  //     sample: state.sample,
  //   }
  // })

  return (
    <div>
      <h1> in containers.</h1>
      <Sample />
    </div>
  );
};
