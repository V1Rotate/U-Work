import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import { ApplicationItem } from './types';
import pickBy from 'lodash/pickBy';
import identity from 'lodash/identity';

export const fetchApplicationItems = createAsyncThunk<ApplicationItem[]>(
  'applicationItem/fetchApplicationItemsStatus',
  async () => {
    const { data } = await axios.get<ApplicationItem[]>(
      `https://63294cb14c626ff832be5321.mockapi.io/applicationItems`,
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
