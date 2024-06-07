import { AsyncPipe } from '@angular/common';
import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { decrement, increment, reset } from '../counter.actions';
import { selectCount } from '../shared/selectors/counter.selector';

@Component({
  selector: 'app-my-counter',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './my-counter.component.html',
  styleUrl: './my-counter.component.css',
})
export class MyCounterComponent {
  countNum$: Observable<number>;

  constructor(private store: Store<{ count: number }>) {
    this.countNum$ = store.select(selectCount);
  }

  increment() {
    this.store.dispatch(increment());
  }

  decrement() {
    this.store.dispatch(decrement());
  }

  reset() {
    this.store.dispatch(reset());
  }
}
