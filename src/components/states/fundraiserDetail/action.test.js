/**
 * - Action FetchFundraiserDetail test
 *   - should handle a fulfilled fetch fundraiserDetail action
 *   - should handle a rejected fetch fundraiserDetail action
 */

import { beforeEach, describe, expect, it, vi } from 'vitest';
import { configureStore } from '@reduxjs/toolkit';
import fundraiserDetailReducer from './reducer';
import api from '../../../utils/api';
import { asyncFetchFundraiserDetail } from './action';

vi.mock('../../../utils/api');

describe('asyncFetchFundraiserDetail', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        fundraiserDetail: fundraiserDetailReducer,
      },
    });
    api.get.mockClear();
  });

  it(
    ('should handle a fulfilled fetch fundraiserDetail action',
    async () => {
      const fundraiser = {
        collectedAmount: 710000,
        createdAt: '2024-05-28T02:42:59.156Z',
        description: 'fundraiser 1',
        donations: [],
        endDate: '2024-09-28T00:00:00.000Z',
        goal: 1000000,
        image: '',
        isClosed: false,
        mitraId: 1,
        title: 'Fundraiser 1',
        updatedAt: '2024-05-28T02:42:59.156Z',
        _id: 1,
      };
      api.get.mockResolvedValue({ data: { fundraiser } });
      await store.dispatch(asyncFetchFundraiserDetail(1));

      const state = store.getState().fundraiser;
      expect(state.fundraiser).toEqual(fundraiser);
    }),
  );

  it('should handle a rejected fetch fundraiserDetail action', async () => {
    const error = 'Failed to fetch';
    api.get.mockRejectedValue(new Error(error));
    window.alert = vi.fn();

    await store.dispatch(asyncFetchFundraiserDetail(1));

    expect(window.alert).toHaveBeenCalledWith(error);
  });
});
