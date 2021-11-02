import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LayoutComponent } from '../../components/layout/layout.component';
import { HeaderComponent } from '../../components/navigation/header/header.component';
import { SidenavListComponent } from '../../components/navigation/sidenav-list/sidenav-list.component';
import { NavModule } from 'src/app/nav.module';
import {
  loginFeatureKey,
  reducer,
} from '../../store/reducer/login.reducer';
import { StoreModule } from '@ngrx/store';
import { CounterComponent } from 'src/components/counter/counter/counter.component';
import { CounterOutputComponent } from 'src/components/counter/counter-output/counter-output.component';
import { CounterButtonsComponent } from 'src/components/counter/counter-buttons/counter-buttons.component';
import { CustomCounterInputComponent } from 'src/components/counter/custom-counter-input/custom-counter-input.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    NavModule,
    StoreModule.forFeature(loginFeatureKey, reducer),
  ],
  declarations: [
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent
  ],
})
export class HomeModule {}
