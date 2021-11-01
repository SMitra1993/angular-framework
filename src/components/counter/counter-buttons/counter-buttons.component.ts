import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Store } from '@ngrx/store';
import { CounterState } from 'src/state/counter.state';
import { decrement, increment, reset } from '../../../login/store/action/login.actions';

@Component({
  selector: 'app-counter-buttons',
  templateUrl: './counter-buttons.component.html',
  styleUrls: ['./counter-buttons.component.scss'],
})
export class CounterButtonsComponent implements OnInit {
  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {}

  onIncrement() {
    this.store.dispatch(increment());
  }

  onDecrement() {
    this.store.dispatch(decrement());
  }

  onReset() {
    this.store.dispatch(reset());
  }
}
