import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchApplicationItems } from './asyncActions';
import { ApplicationItem, ApplicationItemSliceState, Status } from './types';

const initialState: ApplicationItemSliceState = {
  items: [],
  status: Status.LOADING,
};

const applicationItemSlice = createSlice({
  name: 'applicationItem',
  initialState,
  reducers: {
    setItems(state, action: PayloadAction<ApplicationItem[]>) {
      state.items = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApplicationItems.pending, (state, action) => {
      state.status = Status.LOADING;
      state.items = [];
    });

    builder.addCase(fetchApplicationItems.fulfilled, (state, action) => {
      state.items = action.payload;
      state.status = Status.SUCCESS;
    });

    builder.addCase(fetchApplicationItems.rejected, (state, action) => {
      state.status = Status.ERROR;
      state.items = [];
    });
  },
});

export const { setItems } = applicationItemSlice.actions;

export default applicationItemSlice.reducer;
