import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { CounterState } from 'src/state/counter.state';

@Component({
  selector: 'app-counter-output',
  templateUrl: './counter-output.component.html',
  styleUrls: ['./counter-output.component.scss'],
})
export class CounterOutputComponent implements OnInit {
  counter!: number;
  // counterSubscription!: Subscription;
  counter$!: Observable<CounterState>;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    // this.counterSubscription = this.store.select('counter').subscribe((x) => {
    //   this.counter = x.counter;
    // });
    this.counter$ = this.store.select('counter');
  }

  // ngOnDestroy() {
  //   if (this.counterSubscription) {
  //     this.counterSubscription.unsubscribe();
  //   }
  // }
}
