import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../store/store';

import { actions } from '../redux/slice';

export function usePhone() {
  const phoneState = useSelector((state: RootState) => state.dialer);
  const dispatch = useDispatch<AppDispatch>();

  const addNumbers = (number: string) => {
    if (phoneState.dials.length < 9) {
      dispatch(actions.dial(number));
    }
  };

  const deleteNumbers = () => {
    dispatch(actions.delete());
  };

  const callButton = () => {
    dispatch(actions.call());
  };

  const hangButton = () => {
    dispatch(actions.hang());
  };

  return {
    phoneState,
    deleteNumbers,
    addNumbers,
    callButton,
    hangButton,
  };
}
