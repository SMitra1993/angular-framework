import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { loadLogins } from '../../store/action/login.actions';
import { LoginState } from '../../store/reducer/login.reducer';
import { Login } from 'src/models/login';
import { LoginService } from 'src/services/login/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  emailId: string = '';
  password: string = '';

  constructor(
    private router: Router,
    private store: Store<LoginState>,
    private _loginService: LoginService
  ) {}

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

  async onSubmit() {
    const userDetails = {
      userId: this.loginForm.controls.emailId.value,
      password: this.loginForm.controls.password.value,
    };
    await this._loginService.login(userDetails).then((res: any): any => {
      if (!res?.data) {
        return false;
      }
      localStorage.setItem('Token', JSON.stringify(res?.data));
      const login = new Login();
      login.name = this.loginForm.controls.emailId.value;
      this.store.dispatch(loadLogins(login));
      this.store.subscribe(function () {
        localStorage.setItem('[Login] Load Logins', JSON.stringify(login.name));
      });
      this.router.navigate(['/', 'home']);
    });
  }
}
