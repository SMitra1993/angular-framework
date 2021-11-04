import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveModule } from '../../app/directive.module';
import { CounterRoutingModule } from './counter-routing.module';
import { CounterComponent } from './counter/counter.component';
import { CounterButtonsComponent } from './counter-buttons/counter-buttons.component';
import { CounterOutputComponent } from './counter-output/counter-output.component';
import { CustomCounterInputComponent } from './custom-counter-input/custom-counter-input.component';
import { StoreModule } from '@ngrx/store';
import { counterReducer } from 'src/store/reducer/counter.reducer';
import { COUNTER_STATE_NAME } from 'src/store/selector/counter.selectors';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DirectiveModule,
        CounterRoutingModule,
        StoreModule.forFeature(COUNTER_STATE_NAME, counterReducer)
    ],
    declarations: [CounterComponent, CounterButtonsComponent, CounterOutputComponent, CustomCounterInputComponent]
})
export class CounterModule { }