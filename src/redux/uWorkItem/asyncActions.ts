import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { UworkItem } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

export const fetchUworkItems = createAsyncThunk<UworkItem[]>(
  'uWorkItem/fetchUworkItemsStatus',
  async () => {
    const { data } = await axios.get<UworkItem[]>(
      `https://63294cb14c626ff832be5321.mockapi.io/items`,
      {
        params: pickBy(
          {
            limit: 8,
          },
          identity
        ),
      }
    );

    return data;
  }
);
