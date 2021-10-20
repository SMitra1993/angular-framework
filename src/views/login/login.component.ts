import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadLogins } from 'src/login/store/action/login.actions';
import { LoginState } from 'src/login/store/reducer/login.reducer';
import { Login } from 'src/models/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  emailId: string = '';
  password: string = '';

  constructor(private router: Router, private store: Store<LoginState>) {}

  ngOnInit(): void {
    this._initForm();
  }

  private _initForm() {
    this.loginForm = new FormGroup({
      emailId: new FormControl(null, [
        Validators.required,
        Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
      ]),
      password: new FormControl(null, [Validators.required]),
    });
  }

  onSubmit() {
    const login = new Login();
    login.name = this.loginForm.controls.emailId.value;
    this.store.dispatch(loadLogins(login));
    this.store.subscribe(function () {
      localStorage.setItem('[Login] Load Logins', JSON.stringify(login.name));
    });
    this.router.navigate(['/', 'home']);
  }
}
