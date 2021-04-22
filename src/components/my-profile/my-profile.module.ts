import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MyProfileComponent } from './my-profile.component';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveModule } from '../../app/directive.module';
import { MyProfileRoutingModule } from './my-profile-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DirectiveModule,
        MyProfileRoutingModule
    ],
    declarations: [MyProfileComponent]
})
export class MyProfileModule { }