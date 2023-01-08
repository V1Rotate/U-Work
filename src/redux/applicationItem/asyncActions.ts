import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ApplicationItem } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

export const fetchApplicationItems = createAsyncThunk<ApplicationItem[]>(
  'applicationItem/fetchApplicationItemsStatus',
  async () => {
    const { data } = await axios.get<ApplicationItem[]>(
      `SECRET_API_URL`,
      {
        params: pickBy(
          {
            limit: 6,
          },
          identity
        ),
      }
    );

    return data;
  }
);
