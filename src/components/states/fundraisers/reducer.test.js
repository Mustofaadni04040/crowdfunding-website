import { describe, expect, it } from 'vitest';
import fundraiserReducer from './reducer';
import { ActionTypes } from './action';

describe('fundraiserReducer', () => {
  const initialState = {
    fundraisers: [],
    fundraiser: null,
  };

  it('should return the initial state when given by unknown action', () => {
    const action = { type: 'unknown' };

    const nextState = fundraiserReducer(initialState, action);

    expect(nextState).toEqual(initialState);
  });

  it('should handle FETCH_FUNDRAISERS', () => {
    const action = {
      type: ActionTypes.FETCH_FUNDRAISERS,
      payload: [
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
      ],
    };
    const expectedState = {
      ...initialState,
      fundraisers: action.payload,
    };
    expect(fundraiserReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle FETCH_FUNDRAISER_BY_ID', () => {
    const action = {
      type: ActionTypes.FETCH_FUNDRAISER_BY_ID,
      payload: {
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
    };
    const expectedState = {
      ...initialState,
      fundraiser: action.payload,
    };
    expect(fundraiserReducer(initialState, action)).toEqual(expectedState);
  });

  it('should handle CREATE_FUNDRAISER', () => {
    const action = {
      type: ActionTypes.CREATE_FUNDRAISER,
      payload: {
        collectedAmount: 710000,
        createdAt: '2024-06-28T02:42:59.156Z',
        description: 'fundraiser 2',
        donations: [],
        endDate: '2024-08-28T00:00:00.000Z',
        goal: 1000000,
        image: '',
        isClosed: false,
        mitraId: 2,
        title: 'Fundraiser 2',
        updatedAt: '2024-05-28T02:42:59.156Z',
        _id: 2,
      },
    };
    const currentState = {
      ...initialState,
      fundraisers: [
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
      ],
    };
    const expectedState = {
      ...currentState,
      fundraisers: [...currentState.fundraisers, action.payload],
    };
    expect(fundraiserReducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle EDIT_FUNDRAISER', () => {
    const action = {
      type: ActionTypes.EDIT_FUNDRAISER,
      payload: {
        collectedAmount: 720000,
        createdAt: '2024-05-28T02:42:59.156Z',
        description: 'fundraiser 1',
        donations: [],
        endDate: '2024-09-28T00:00:00.000Z',
        goal: 1000000,
        image: '',
        isClosed: false,
        mitraId: 1,
        title: 'Updated fundraiser 1',
        updatedAt: '2024-05-28T02:42:59.156Z',
        _id: 1,
      },
    };
    const currentState = {
      ...initialState,
      fundraisers: [
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
          collectedAmount: 710000,
          createdAt: '2024-06-28T02:42:59.156Z',
          description: 'fundraiser 2',
          donations: [],
          endDate: '2024-08-28T00:00:00.000Z',
          goal: 1000000,
          image: '',
          isClosed: false,
          mitraId: 2,
          title: 'Fundraiser 2',
          updatedAt: '2024-05-28T02:42:59.156Z',
          _id: 2,
        },
      ],
    };
    const expectedState = {
      ...currentState,
      fundraisers: currentState.fundraisers.map((fundraiser) =>
        fundraiser._id === action.payload._id ? action.payload : fundraiser,
      ),
    };
    expect(fundraiserReducer(currentState, action)).toEqual(expectedState);
  });

  it('should handle DELETE_FUNDRAISER', () => {
    const action = {
      type: ActionTypes.DELETE_FUNDRAISER,
      payload: 1,
    };
    const currentState = {
      ...initialState,
      fundraisers: [
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
          collectedAmount: 710000,
          createdAt: '2024-06-28T02:42:59.156Z',
          description: 'fundraiser 2',
          donations: [],
          endDate: '2024-08-28T00:00:00.000Z',
          goal: 1000000,
          image: '',
          isClosed: false,
          mitraId: 2,
          title: 'Fundraiser 2',
          updatedAt: '2024-05-28T02:42:59.156Z',
          _id: 2,
        },
      ],
    };
    const expectedState = {
      ...currentState,
      fundraisers: currentState.fundraisers.filter(
        (fundraiser) => fundraiser._id !== action.payload,
      ),
    };
    expect(fundraiserReducer(currentState, action)).toEqual(expectedState);
  });
});
