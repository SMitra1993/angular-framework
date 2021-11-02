import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app.state';
import { Observable } from 'rxjs';
import { Post } from 'src/models/post';
import { getPost } from 'src/store/selector/post.selectors';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'], //,
})
export class PostComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

  posts!: Observable<Post[]>;
  ngOnInit(): void {
    this.posts = this.store.select(getPost);
  }
}
