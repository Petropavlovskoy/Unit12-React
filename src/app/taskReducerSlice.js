import { createSlice } from '@reduxjs/toolkit';

export const taskReducerSlice = createSlice({
   name: 'store',
   initialState: {
      value: 10,
      text: 'privet'
   },
   reducers: {
      text: state => {
         state.text = state.text;
      },

      add: (state, data) => {
         state.value += +data.payload;
      },
      minus: (state, data) => {
         state.value -= +data.payload;
      },
      multi: (state, data) => {
         state.value *= +data.payload;
      },
      division: (state, data) => {
         state.value /= +data.payload;
      },
   },
});

export const { add, minus, multi, division, text, showConsole } = taskReducerSlice.actions;

export const selectValue = state => state.taskReducer.value;
export const selectTest = state => state.taskReducer.text;

export default taskReducerSlice.reducer;