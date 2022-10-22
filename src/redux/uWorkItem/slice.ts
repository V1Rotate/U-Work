import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUworkItems } from './asyncActions';
import { UworkItem, UworkItemSliceState, Status } from './types';

const initialState: UworkItemSliceState = {
  items: [],
  status: Status.LOADING,
};

const uWorkItemSlice = createSlice({
  name: 'uWorkItem',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<UworkItem[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUworkItems.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchUworkItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchUworkItems.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = uWorkItemSlice.actions;

export default uWorkItemSlice.reducer;
