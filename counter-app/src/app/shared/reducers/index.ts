import { ActionReducerMap } from '@ngrx/store';
import { initialCount } from '../models/counter.model';
import { countKey } from '../states/counter.state';
import { counterReducer } from '../../counter.reducer';

export interface AppState {
  [countKey]: initialCount;
}

export const reducers: ActionReducerMap<AppState> = {
  [countKey]: counterReducer,
};
