import { HttpClient } from '@angular/common/http';
import {
  Component,
  Host,
  Inject,
  InjectionToken,
  OnInit,
  Optional,
  Self,
  SkipSelf,
} from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { logout } from '../../store/action/login.actions';
import { Login } from 'src/models/login';
import { MyProfileService } from '../../services/my-profile/my-profile.service';
import * as loaderService from '../../services/loader/loader-service';
import { AppState } from 'src/store/app.state';
// function coursesServiceProviderFactory(http: HttpClient): MyProfileService {
//   return new MyProfileService(http);
// }

// const MyProfileService_TOKEN = new InjectionToken<MyProfileService>(
//   'MyProfileService_TOKEN'
// );

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']//,
  // providers: [
  //   {
  //     provide: MyProfileService,
  //     useClass: MyProfileService,
  //     deps: [HttpClient],
  //   },
  // ],
})
export class MyProfileComponent implements OnInit {
  isEditable: boolean = false;
  myProfileForm!: FormGroup;
  userId: string = 'mjohnson@gmail.com';
  firstName: string = '';
  lastName: string = '';
  address1: string = '';
  address2: string = '';
  city: string = '';
  state: string = '';
  pinCode: string = '';
  emailId: string = '';
  mobile: string = '';
  fullAddress: string =
    this.address1 +
    ' ' +
    (this.address2 ? this.address2 + ' ' : '') +
    this.city +
    ' ' +
    this.state +
    ' - ' +
    this.pinCode;
  // form: [{ 'key': string, 'value': string }] = [{ 'key': string, 'value': '' }];
  constructor(
    private router: Router,
    private store: Store<AppState>,
    private _myProfileService: MyProfileService
  ) {}

  ngOnInit(): void {
    this._initForm();
    this._getData();
    
  }

  private async _getData() {
    await this._myProfileService
      .getMyProfileData(this.userId)
      .then((res: any): any => {
        if (!res?.data) {
          return false;
        }
        console.log(res);
        this.firstName = res.data.firstName;
        this.lastName = res.data.lastName;
        this.mobile = res.data.phone;
        this.emailId = res.data.emailId;
        this.address1 = res.data.address1;
        this.address2 = res.data.address2;
        this.state = res.data.state;
        this.pinCode = res.data.pinCode;
        this.city = res.data.city;
        this.fullAddress = this._addressMerge(
          res.data.address1,
          res.data.address2,
          res.data.state,
          res.data.pinCode,
          res.data.city
        );
      })
      .catch((err) => {
        alert(err.message);
        console.log(err);
        const login = new Login();
        this.router.navigate(['/', '/']);
        localStorage.clear();
        this.store.dispatch(logout());
      });
  }

  private _addressMerge(
    address1: string,
    address2: string,
    state: string,
    pinCode: string,
    city: string
  ) {
    return (
      address1 +
      ' ' +
      (address2 ? address2 + ' ' : '') +
      city +
      ' ' +
      state +
      ' - ' +
      pinCode
    );
  }

  private _initForm() {
    // this.form.push([{'key': '', 'value': ''}])

    this.myProfileForm = new FormGroup({
      firstName: new FormControl(this.firstName, [
        Validators.pattern('^[A-Za-z -]+$'),
        Validators.required,
      ]),
      lastName: new FormControl(this.lastName, [
        Validators.pattern('^[A-Za-z -]+$'),
        Validators.required,
      ]),
      address1: new FormControl(this.address1, [
        Validators.pattern("^[a-zA-Z0-9s. ,'-]*$"),
        Validators.maxLength(20),
        Validators.required,
      ]),
      address2: new FormControl(this.address2, [
        Validators.pattern("^[a-zA-Z0-9s. ,'-]*$"),
        Validators.maxLength(20),
      ]),
      city: new FormControl(this.city, [
        Validators.pattern('^[a-zA-Z -]*$'),
        Validators.required,
      ]),
      state: new FormControl(this.state, [
        Validators.pattern('^[A-Za-z -]+$'),
        Validators.required,
      ]),
      pinCode: new FormControl(this.pinCode, [
        Validators.pattern('^[0-9]+$'),
        Validators.required,
      ]),
      emailId: new FormControl(this.emailId, [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      mobile: new FormControl(this.mobile, [
        Validators.pattern(/^\(\d{2}\)-\d{3}-\d{3}-\d{3}$/),
        Validators.required,
      ]),
    });
  }

  editProfile() {
    this.isEditable = !this.isEditable;
  }

  onSubmit() {
    this.isEditable = false;
  }
}
