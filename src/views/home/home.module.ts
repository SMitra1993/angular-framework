import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LayoutComponent } from '../../components/layout/layout.component';
import { HeaderComponent } from '../../components/navigation/header/header.component';
import { SidenavListComponent } from '../../components/navigation/sidenav-list/sidenav-list.component';
import { NavModule } from '../../app/nav.module';
import { StoreModule } from '@ngrx/store';
import { AUTH_STATE_NAME } from '../../store/selector/login.selector';
import { authReducer } from '../../store/reducer/login.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '../../store/effects/login.effect';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HomeRoutingModule,
    NavModule,
    StoreModule.forFeature(AUTH_STATE_NAME, authReducer),
    EffectsModule.forFeature([AuthEffects])
  ],
  declarations: [
    HomeComponent,
    LayoutComponent,
    HeaderComponent,
    SidenavListComponent
  ],
})
export class HomeModule {}
