/**
 * - Reducer fundraiserDetail test
 *   - should return the initial state when given by unknown action
 *   - should handle SELECTED_FUNDRAISER
 *   - should handle SET_LOADING
 */

import { describe, expect, it } from 'vitest';
import fundraiserDetailReducer from './reducer';
import { ActionTypes } from './action';

describe('fundraiserDetailReducer', () => {
  const initialState = {
    fundraiser: null,
    loading: false,
  };

  it('should return the initial state when an unknown action is provided', () => {
    const action = { type: 'unknown' };

    const nextState = fundraiserDetailReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should handle SELECTED_FUNDRAISER', () => {
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
    const action = {
      type: ActionTypes.SELECTED_FUNDRAISER,
      payload: fundraiser,
    };
    const expectedState = {
      ...initialState,
      fundraiser,
      loading: false,
    };

    expect(fundraiserDetailReducer(initialState, action)).toEqual(
      expectedState,
    );
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

    expect(fundraiserDetailReducer(initialState, action)).toEqual(
      expectedState,
    );
  });
});
