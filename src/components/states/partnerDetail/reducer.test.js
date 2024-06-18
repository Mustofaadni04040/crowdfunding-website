/**
 * - Reducer partnerDetail test
 *   - should return the initial state when given by unknown action
 *   - should handle SELECTED_FUNDRAISER
 *   - should handle SET_LOADING
 */

import { describe, expect, it } from 'vitest';
import partnerDetailReducer from './reducer';
import { ActionTypes } from './action';

describe('partnerDetailReducer', () => {
  const initialState = {
    partner: null,
    loading: false,
  };

  it('should return the initial state when an unknown action is provided', () => {
    const action = { type: 'unknown' };

    const nextState = partnerDetailReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should handle SELECTED_PARTNER', () => {
    const partner = {
      _id: '1',
      name: 'mitra 1',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/e/e6/Logo_BAZNAS_RI-Hijau-01.png',
      campaign: 'mitra 1',
      fundraisers: [],
      createdAt: '2024-06-16T13:01:43.466Z',
    };
    const action = {
      type: ActionTypes.SELECTED_PARTNER,
      payload: partner,
    };

    const expextedState = {
      ...initialState,
      partner,
      loading: false,
    };

    expect(partnerDetailReducer(initialState, action)).toEqual(expextedState);
  });

  it('should handle SET_LOADING', () => {
    const action = {
      type: ActionTypes.SET_LOADING,
      payload: true,
    };
    const expectedState = {
      ...initialState,
      loading: true,
    };

    expect(partnerDetailReducer(initialState, action)).toEqual(expectedState);
  });
});
