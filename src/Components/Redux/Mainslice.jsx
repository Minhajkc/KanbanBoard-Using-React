import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  value: [],
};

const mainSlice = createSlice({
  name: 'boardvalue',
  initialState,
  reducers: {
    addValue: (state, action) => {
      state.value.push(action.payload); // Add the payload to the state
    },
  },
});

export const { addValue } = mainSlice.actions; // Extract the action creator

export default mainSlice.reducer;
