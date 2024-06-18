/**
 * - Reducer fundraisers test
 *   - should return the initial state when given by unknown action
 *   - should handle FETCH_FUNDRAISERS
 *   - should handle SET_LOADING
 */

import { describe, expect, it } from 'vitest';
import partnersReducer from './reducer';
import { ActionTypes } from './action';

describe('partnersReducer', () => {
  const initialState = {
    partners: [],
    loading: false,
  };

  it('should return the initial state when given by unknown action', () => {
    const action = { type: 'unknown' };

    const nextState = partnersReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should handle FETCH_PARTNERS', () => {
    const action = {
      type: ActionTypes.FETCH_PARTNERS,
      payload: [
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
      ],
    };
    const expectedState = {
      ...initialState,
      partners: action.payload,
    };
    expect(partnersReducer(initialState, action)).toEqual(expectedState);
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

    expect(partnersReducer(initialState, action)).toEqual(expectedState);
  });
});
