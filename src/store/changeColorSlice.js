import { createSlice } from '@reduxjs/toolkit';

const changeColorSlice = createSlice({
  name: 'changeColor',
  initialState: { value: 'red' },
  reducers: {
    changeColors: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { changeColors } = changeColorSlice.actions;
export default changeColorSlice.reducer;