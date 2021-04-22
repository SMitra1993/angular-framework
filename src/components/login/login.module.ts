import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveModule } from '../../app/directive.module';
import { LoginComponent } from './login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DirectiveModule,
        LoginRoutingModule
    ],
    declarations: [LoginComponent]
})
export class LoginModule { }