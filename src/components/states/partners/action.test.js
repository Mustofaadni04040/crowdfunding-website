/**
 * - Action Fetchpartners test
 *   - should handle a fulfilled fetch partners action
 *   - should handle a rejected fetch partners action
 */

import { beforeEach, describe, expect, it, vi } from 'vitest';
import { configureStore } from '@reduxjs/toolkit';
import partnersReducer from './reducer';
import api from '../../../utils/api';
import { asyncFetchPartners } from './action';

vi.mock('../../../utils/api');

describe('asyncFetchPartners', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        partners: partnersReducer,
      },
    });
    api.get.mockClear();
  });

  it('should handle a fulfilled fetch partners action', async () => {
    const mitra = [
      {
        _id: '1',
        name: 'mitra 1',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/e/e6/Logo_BAZNAS_RI-Hijau-01.png',
        campaign: 'mitra 1',
        fundraisers: [],
        createdAt: '2024-06-16T13:01:43.466Z',
      },
      {
        _id: '2',
        name: 'mitra 2',
        image:
          'https://upload.wikimedia.org/wikipedia/commons/e/e6/Logo_BAZNAS_RI-Hijau-01.png',
        campaign: 'mitra 2',
        fundraisers: [],
        createdAt: '2024-06-16T13:01:43.466Z',
      },
    ];
    api.get.mockResolvedValue({ data: { mitra } });

    await store.dispatch(asyncFetchPartners());

    const state = store.getState().partners;
    expect(state.partners).toEqual([...mitra]);
  });

  it('should handle a rejected fetch partners action', async () => {
    const error = 'Failed to fetch';
    api.get.mockRejectedValue(new Error(error));
    window.alert = vi.fn();

    await store.dispatch(asyncFetchPartners());

    expect(window.alert).toHaveBeenCalledWith(error);
  });
});
