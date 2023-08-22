import { createSlice } from '@reduxjs/toolkit';

export type PhoneState = {
  dials: string;
  loadState: 'dialing' | 'idle' | 'calling' | '';
};

const initialState: PhoneState = {
  dials: '',
  loadState: '',
};

const phoneSlice = createSlice({
  name: 'dials',
  initialState: initialState,
  reducers: {
    dial: (state, { payload }: { payload: string }) => {
      state.dials = state.dials + payload;
      state.loadState = 'dialing';
    },
    delete: (state) => {
      state.dials = '';
      state.loadState = '';
    },
    call: (state) => {
      state.loadState = 'calling';
    },
    hang: (state) => {
      state.dials = '';
      state.loadState = '';
    },
  },
});

export const actions = phoneSlice.actions;
export default phoneSlice.reducer;
