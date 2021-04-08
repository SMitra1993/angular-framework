import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm!: FormGroup;

  constructor(config: NgbTooltipConfig) {
    config.placement = 'right';
    config.triggers = 'hover';
  }
  firstName: string = '';
  lastName: string = '';
  address1: string = '';
  address2: string = '';
  city: string = '';
  state: string = '';
  pinCode: string = '';
  emailId: string = '';
  password: string = '';
  mobile: string = '';

  ngOnInit(): void {
    this.initForm();
  }

  private initForm() {
    this.registrationForm = new FormGroup({
      'firstName': new FormControl(null, [
        Validators.pattern("^[A-Za-z -]+$"),
        Validators.required
      ]),
      'lastName': new FormControl(null, [
        Validators.pattern("^[A-Za-z -]+$"),
        Validators.required
      ]),
      'address1': new FormControl(null, [
        Validators.pattern("^[a-zA-Z0-9\s. ,'-]*$"),
        Validators.maxLength(15),
        Validators.required
      ]),
      'address2': new FormControl(null, [
        Validators.pattern("^[a-zA-Z0-9\s. ,'-]*$"),
        Validators.maxLength(15)
      ]),
      'city': new FormControl(null, [
        Validators.pattern("^[a-zA-Z -]*$"),
        Validators.required
      ]),
      'state': new FormControl(null, [
        Validators.pattern("^[A-Za-z -]+$"),
        Validators.required
      ]),
      'pinCode': new FormControl(null, [
        Validators.pattern("^[0-9]+$"),
        Validators.required
      ]),
      'emailId': new FormControl(null, [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      'password': new FormControl(null, [
        Validators.minLength(8),
        Validators.required,
        Validators.pattern("^(?=.*[0-9])(?=.*[!@$&*])[a-zA-Z0-9!@$&*]{8,}$")
      ]),
      'mobile': new FormControl(null, [
        Validators.pattern(/^\(\d{2}\)-\d{3}-\d{3}-\d{3}$/),
        Validators.required
      ])
    });
  }

  onSubmit() {
    alert(this.registrationForm.controls['mobile'].value);
    // alert(this.registrationForm.controls['password'].value);
  }

}
