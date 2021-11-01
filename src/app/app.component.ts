import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Subscription } from 'rxjs';
import * as loaderService from '../services/loader/loader-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'ng-app';
  isLoaderShow: boolean= false;
  public subscription!: Subscription;

  ngOnInit(): void {
    this.subscription = loaderService.pageLoader.getMessage().subscribe(data => {
      this.isLoaderShow = data;
    })
  }
}
