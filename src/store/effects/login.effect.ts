import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap } from 'rxjs/operators';
import { LoginService } from 'src/services/login/login.service';
import { loginStart, loginSuccess } from '../action/login.action';

@Injectable()
export class AuthEffects {
  constructor(
    private actions$: Actions,
    private authService: LoginService,
    private router: Router
  ) {}

  login$ = createEffect((): any => {
    return this.actions$.pipe(
      ofType(loginStart),
      exhaustMap((action): any => {
        return this.authService
          .login(action.userId, action.password)
          .then((res: any): any => {
            if (!res?.data) {
              return false;
            }
            const user: any = this.authService.formatUser(res?.data);
            this.authService.setUserInLocalStorage(user.token);
            this.router.navigate(['/', 'home']);
            return loginSuccess({ user });
          });
      })
    );
  });
}
