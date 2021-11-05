import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app.state';
import { getCounter } from '../../../store/selector/counter.selectors';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit {
  counter!: number;
  // counterSubscription!: Subscription;
  // counter$!: Observable<CounterState>;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.select(getCounter).subscribe((counter) => {
      this.counter = counter;
    });
    // this.counter$ = this.store.select(COUNTER_STATE_NAME);
  }

  // ngOnDestroy() {
  //   if (this.counterSubscription) {
  //     this.counterSubscription.unsubscribe();
  //   }
  // }
}
