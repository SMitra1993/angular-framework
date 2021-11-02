import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/store/app.state';
import { Observable } from 'rxjs';
import { Post } from 'src/models/post';
import { getPost } from 'src/store/selector/post.selectors';
import { deletePost } from 'src/store/action/post.action';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { ConfirmComponent } from 'src/components/confirm/confirm.component';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss'], //,
})
export class PostComponent implements OnInit {
  constructor(
    private store: Store<AppState>,
    private confirmDialog: MatDialog
  ) {}

  posts!: Observable<Post[]>;
  ngOnInit(): void {
    this.posts = this.store.select(getPost);
  }

  onDeletePost(id: string) {
    const dialogRef = this.confirmDialog.open(ConfirmComponent);

    dialogRef.componentInstance.message = `Are you sure you want to delete the id ${id}?`;
    // if (this.confirmDialog.openDialogs) {
    //   console.log(dialogRef);
    // }

    // this.store.dispatch(deletePost({ id }));
    dialogRef.beforeClosed().subscribe((data) => {
      if (data === 'true') {
        this.store.dispatch(deletePost({ id }));
      }
    });
  }
}
