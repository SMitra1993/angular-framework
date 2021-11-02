import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveModule } from '../../../app/directive.module';
import { AddPostComponent } from './add-post.component';
import { AddPostRoutingModule } from './add-post-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DirectiveModule,
        AddPostRoutingModule
    ],
    declarations: [AddPostComponent]
})
export class AddPostModule { }