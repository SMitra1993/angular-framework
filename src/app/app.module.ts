import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from '../components/login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RegistrationComponent } from '../components/registration/registration.component';
import { PhoneMaskDirective } from '../directives/phone-mask.directive';
import { ForgotPasswordComponent } from '../components/forgot-password/forgot-password.component';
import { MyProfileComponent } from '../components/my-profile/my-profile.component';
import { HomeComponent } from '../components/home/home.component';
import { HeaderComponent } from '../components/navigation/header/header.component';
import { SidenavListComponent } from '../components/navigation/sidenav-list/sidenav-list.component';
import { LayoutComponent } from '../components/layout/layout.component';
import { NavModule } from './nav.module';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistrationComponent,
    PhoneMaskDirective,
    ForgotPasswordComponent,
    MyProfileComponent,
    HomeComponent,
    HeaderComponent,
    SidenavListComponent,
    LayoutComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    NavModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
