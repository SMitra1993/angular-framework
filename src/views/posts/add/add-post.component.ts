import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app.state';
import { Observable } from 'rxjs';
import { Post } from 'src/models/post';
import { getPost } from 'src/store/selector/profile.selectors';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.scss'], //,
})
export class AddPostComponent implements OnInit {
  constructor(private store: Store<AppState>) {}

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
