/**
 * - Action FetchPartnerDetail test
 *   - should handle a fulfilled fetch partnerDetail action
 *   - should handle a rejected fetch partnerDetail action
 */

import { configureStore } from '@reduxjs/toolkit';
import { beforeEach, describe, expect, it, vi } from 'vitest';
import partnerDetailReducer from './reducer';
import api from '../../../utils/api';
import { asyncSelectedPartner } from './action';

vi.mock('../../../utils/api');

describe('asyncFetchPartnerDetail', () => {
  let store;

  beforeEach(() => {
    store = configureStore({
      reducer: {
        partnerDetail: partnerDetailReducer,
      },
    });
    api.get.mockClear();
  });

  it('should handle a fulfilled fetch partnerDetail action', async () => {
    const mitra = {
      _id: '1',
      name: 'mitra 1',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/e/e6/Logo_BAZNAS_RI-Hijau-01.png',
      campaign: 'mitra 1',
      fundraisers: [],
      createdAt: '2024-06-16T13:01:43.466Z',
    };
    api.get.mockResolvedValue({ data: { mitra } });
    await store.dispatch(asyncSelectedPartner('1'));

    const state = store.getState().partnerDetail;
    expect(state.partner).toEqual(mitra);
  });

  it('should handle a rejected fetch partnerDetail action', async () => {
    const error = 'Failed to fetch';
    api.get.mockRejectedValue(new Error(error));
    window.alert = vi.fn();

    await store.dispatch(asyncSelectedPartner('1'));

    expect(window.alert).toHaveBeenCalledWith(error);
  });
});
