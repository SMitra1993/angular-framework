import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveModule } from '../../../app/directive.module';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        DirectiveModule,
        PostRoutingModule
    ],
    declarations: [PostComponent]
})
export class PostModule { }