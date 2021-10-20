import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { LayoutComponent } from '../../components/layout/layout.component';
import { HeaderComponent } from '../../components/navigation/header/header.component';
import { SidenavListComponent } from '../../components/navigation/sidenav-list/sidenav-list.component';
import { NavModule } from 'src/app/nav.module';
import { loginFeatureKey, reducer } from 'src/login/store/reducer/login.reducer';
import { StoreModule } from '@ngrx/store';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        HomeRoutingModule,
        NavModule,
        StoreModule.forFeature(loginFeatureKey, reducer)
    ],
    declarations: [HomeComponent, LayoutComponent ,HeaderComponent, SidenavListComponent]
})
export class HomeModule { }