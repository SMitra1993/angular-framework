import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app.state';
import { Observable } from 'rxjs';
import { Post } from 'src/models/post';
import { getPost } from 'src/store/selector/post.selectors';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { addPost } from 'src/store/action/post.action';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'], //,
})
export class AddPostComponent implements OnInit {
  constructor(private store: Store<AppState>, private router: Router) {}

  postForm!: FormGroup;
  posts!: Observable<Post[]>;
  ngOnInit(): void {
    this.postForm = new FormGroup({
      title: new FormControl(null, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(null, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onAddPost() {
    if (!this.postForm.valid) {
      return;
    }

    const post: Post = {
      description: this.postForm.value.description,
      title: this.postForm.value.title,
    };

    this.store.dispatch(addPost({ post }));
    this.router.navigate(['/home', 'post']);
  }

  showDescriptionErrorMessage(): any {
    const descriptionForm: any | null = this.postForm.get('description');
    if (descriptionForm.touched && !descriptionForm.valid) {
      if (descriptionForm.errors.required) {
        return 'Description is required';
      }

      if (descriptionForm.errors.minlength) {
        return 'Description should be of minimum 10 characters length';
      }
    }
  }
}
