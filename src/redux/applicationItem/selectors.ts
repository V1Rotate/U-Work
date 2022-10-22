import { RootState } from '../store';

export const selectApplicationItemData = (state: RootState) =>
  state.applicationItem;
