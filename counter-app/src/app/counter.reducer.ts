import { createReducer, on } from '@ngrx/store';
import * as CounterActions from './counter.actions';
import { initialState } from './shared/states/counter.state';

export const counterReducer = createReducer(
  initialState,
  on(CounterActions.increment, (state) => ({
    ...state,
    countNum: state.countNum + 1,
  })),
  on(CounterActions.decrement, (state) => ({
    ...state,
    countNum: state.countNum - 1,
  })),
  on(CounterActions.reset, (state) => ({ ...state, countNum: 0 }))
);
