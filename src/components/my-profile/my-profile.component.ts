import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-profile',
  templateUrl: './my-profile.component.html',
  styleUrls: ['./my-profile.component.scss']
})
export class MyProfileComponent implements OnInit {

  isEditable: boolean = false;
  myProfileForm!: FormGroup;

  firstName: string = 'Souvik';
  lastName: string = 'Mitra';
  address1: string = '27 Mercer Street';
  address2: string = 'Castle Hill';
  city: string = 'Sydney';
  state: string = 'NSW';
  pinCode: string = '2154';
  emailId: string = 'msouvik38@gmail.com';
  mobile: string = '(61)-404-884-806';
  fullAddress: string = this.address1 + ' ' + (this.address2 ? this.address2 + ' ' : '')
    + this.city + ' ' + this.state + ' - ' + this.pinCode;

  constructor() { }

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm() {
    this.myProfileForm = new FormGroup({
      'firstName': new FormControl(this.firstName, [
        Validators.pattern("^[A-Za-z -]+$"),
        Validators.required
      ]),
      'lastName': new FormControl(this.lastName, [
        Validators.pattern("^[A-Za-z -]+$"),
        Validators.required
      ]),
      'address1': new FormControl(this.address1, [
        Validators.pattern("^[a-zA-Z0-9\s. ,'-]*$"),
        Validators.maxLength(20),
        Validators.required
      ]),
      'address2': new FormControl(this.address2, [
        Validators.pattern("^[a-zA-Z0-9\s. ,'-]*$"),
        Validators.maxLength(20)
      ]),
      'city': new FormControl(this.city, [
        Validators.pattern("^[a-zA-Z -]*$"),
        Validators.required
      ]),
      'state': new FormControl(this.state, [
        Validators.pattern("^[A-Za-z -]+$"),
        Validators.required
      ]),
      'pinCode': new FormControl(this.pinCode, [
        Validators.pattern("^[0-9]+$"),
        Validators.required
      ]),
      'emailId': new FormControl(this.emailId, [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      'mobile': new FormControl(this.mobile, [
        Validators.pattern(/^\(\d{2}\)-\d{3}-\d{3}-\d{3}$/),
        Validators.required
      ])
    });
  }

  editProfile() {
    this.isEditable = !this.isEditable;
  }

  onSubmit() {

  }
}
