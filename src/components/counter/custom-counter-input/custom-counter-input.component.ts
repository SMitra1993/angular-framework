import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import {
  changeChannelName,
  customIncrement,
} from 'src/login/store/action/login.actions';
import { getChannelName } from 'src/login/store/selector/login.selectors';
import { CounterState } from 'src/state/counter.state';

@Component({
  selector: 'app-custom-counter-input',
  templateUrl: './custom-counter-input.component.html',
  styleUrls: ['./custom-counter-input.component.scss'],
})
export class CustomCounterInputComponent implements OnInit {
  value!: number;
  channelName!: string;

  constructor(private store: Store<{ counter: CounterState }>) {}

  ngOnInit(): void {
    this.store.select(getChannelName).subscribe((channelName) => {
      this.channelName = channelName;
    });
  }
  onAdd() {
    this.store.dispatch(customIncrement({ count: +this.value }));
  }
  onChangeChannelName() {
    this.store.dispatch(changeChannelName());
  }
}
