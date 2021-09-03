import { configureStore, createSlice } from '@reduxjs/toolkit';

export interface RuntimeState {
  activated: boolean;
}
const runtimeState: RuntimeState = {
  activated: false,
};
const runtimeSlice = createSlice({
  name: 'runtime',
  initialState: runtimeState,
  reducers: {
    toggleActivated: (state) => {
      state.activated = !state.activated;
    },
  },
});

const store = configureStore({
  reducer: {
    runtime: runtimeSlice.reducer,
  },
});

export default store;
