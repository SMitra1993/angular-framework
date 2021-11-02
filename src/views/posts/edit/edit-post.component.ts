import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app.state';
import { Observable, Subscription } from 'rxjs';
import { Post } from 'src/models/post';
import { getPostById } from 'src/store/selector/post.selectors';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { updatePost } from 'src/store/action/post.action';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './edit-post.component.html',
  styleUrls: ['./edit-post.component.scss'], //,
})
export class EditPostComponent implements OnInit, OnDestroy {
  constructor(
    private store: Store<AppState>,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  postForm!: FormGroup;
  posts!: Observable<Post[]>;
  postSubscription!: Subscription;

  post!: Post;
  ngOnInit(): void {
    this.route.paramMap.subscribe((param) => {
      const id = param.get('id');
      this.postSubscription = this.store
        .select(getPostById, { id })
        .subscribe((data: any) => {
          this.post = data;
          this.createForm();
        });
    });
  }

  createForm() {
    this.postForm = new FormGroup({
      title: new FormControl(this.post.title, [
        Validators.required,
        Validators.minLength(6),
      ]),
      description: new FormControl(this.post.description, [
        Validators.required,
        Validators.minLength(10),
      ]),
    });
  }

  onUpdatePost() {
    if (!this.postForm.valid) {
      return;
    }

    const post: Post = {
      id: this.post.id,
      description: this.postForm.value.description,
      title: this.postForm.value.title,
    };

    this.store.dispatch(updatePost({ post }));
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

  ngOnDestroy() {
    if (this.postSubscription) {
      this.postSubscription.unsubscribe();
    }
  }
}
