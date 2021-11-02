import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveModule } from '../../../app/directive.module';
import { EditPostComponent } from './edit-post.component';
import { EditPostRoutingModule } from './edit-post-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DirectiveModule,
        EditPostRoutingModule
    ],
    declarations: [EditPostComponent]
})
export class EditPostModule { }