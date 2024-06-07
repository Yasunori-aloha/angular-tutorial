import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Count } from '../models/counter.model';
import { countKey } from '../states/counter.state';

export const selectCounterState = createFeatureSelector<Count>(countKey);

export const selectCount = createSelector(
  selectCounterState,
  (state) => state.countNum
);
