/**
 * - Action FetchFundraisers test
 *   - should handle a fulfilled fetch fundraisers action
 *   - should handle a rejected fetch fundraisers action
 */

import { configureStore } from '@reduxjs/toolkit';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import fundraiserReducer from './reducer';
import api from '../../../utils/api';
import { asyncFetchFundraisers } from './action';

vi.mock('../../../utils/api');

describe('asyncFetchFundraisers', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        fundraisers: fundraiserReducer,
      },
    });
    api.get.mockClear();
  });

  it('should handle a fulfilled fetch fundraisers action', async () => {
    const fundraisers = [
      {
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
      },
      {
        collectedAmount: 800000,
        createdAt: '2024-05-28T02:42:59.156Z',
        description: 'fundraiser 2',
        donations: [],
        endDate: '2024-09-28T00:00:00.000Z',
        goal: 1000000,
        image: '',
        isClosed: false,
        mitraId: 2,
        title: 'Fundraiser 2',
        updatedAt: '2024-05-28T02:42:59.156Z',
        _id: 2,
      },
    ];
    api.get.mockResolvedValue({ data: { fundraisers } });

    await store.dispatch(asyncFetchFundraisers());

    const state = store.getState().fundraisers;
    expect(state.fundraisers).toEqual([...fundraisers]);
  });

  it('should handle a rejected fetch fundraisers action', async () => {
    const error = 'Failed to fetch';
    api.get.mockRejectedValue(new Error(error));
    window.alert = vi.fn();

    await store.dispatch(asyncFetchFundraisers());

    expect(window.alert).toHaveBeenCalledWith(error);
  });
});
