import { NgModule, ɵrenderComponent as renderComponent } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavModule } from './nav.module';
import { MyProfileModule } from '../components/my-profile/my-profile.module';
import { DirectiveModule } from './directive.module';
import { RegistrationModule } from '../components/registration/registration.module';
import { LoginModule } from '../components/login/login.module';
import { HomeModule } from 'src/components/home/home.module';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    NavModule,
    DirectiveModule,
    MyProfileModule,
    RegistrationModule,
    LoginModule,
    HomeModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
