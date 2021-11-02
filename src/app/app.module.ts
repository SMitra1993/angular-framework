import { NgModule, ɵrenderComponent as renderComponent } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NavModule } from './nav.module';
import { HomeModule } from 'src/views/home/home.module';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { appReducer } from '../store/app.state';
import { ConfirmComponent } from 'src/components/confirm/confirm.component';

@NgModule({
  declarations: [AppComponent, ConfirmComponent],
  imports: [
    FormsModule,
    BrowserModule.withServerTransition({ appId: 'serverApp' }),
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    NavModule,
    HttpClientModule,
    HomeModule,
    RouterModule,
    StoreModule.forRoot(appReducer),
    !environment.production
      ? StoreDevtoolsModule.instrument({
          logOnly: environment.production, // Restrict extension to log-only mode
        })
      : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
