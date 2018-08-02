import { createSelector } from 'reselect';

export const selectCounter = state => state.get('counter');

export const makeSelectCounter = () => createSelector(selectCounter, counterState => counterState.get('counter'));
