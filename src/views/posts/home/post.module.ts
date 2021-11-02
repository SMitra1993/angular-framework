import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DirectiveModule } from '../../../app/directive.module';
import { PostComponent } from './post.component';
import { PostRoutingModule } from './post-routing.module';
import { StoreModule } from '@ngrx/store';
import { postReducer } from 'src/store/reducer/post.reducer';
import { POST_STATE_NAME } from 'src/store/selector/post.selectors';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    DirectiveModule,
    PostRoutingModule,
    StoreModule.forFeature(POST_STATE_NAME, postReducer),
  ],
  declarations: [PostComponent],
})
export class PostModule {}
