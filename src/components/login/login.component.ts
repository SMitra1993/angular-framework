import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  emailId: string = '';
  password: string = '';

  constructor(private router: Router) { }

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm() {
    this.loginForm = new FormGroup({
      'emailId': new FormControl(null, [Validators.required,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")]),
      'password': new FormControl(null, [
        Validators.required
      ]),
    });
  }

  onSubmit() {
    this.router.navigate(['/', 'home']);
  }
}
