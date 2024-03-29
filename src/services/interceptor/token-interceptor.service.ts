import {
  HttpErrorResponse,
  HttpEvent,
  HttpHandler,
  HttpInterceptor,
  HttpRequest,
  HttpResponse,
} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { ToastrService } from 'ngx-toastr';
import { Observable, throwError } from 'rxjs';
import { catchError, delay, finalize, tap } from 'rxjs/operators';
import { ResponseCodes } from 'src/constants/response-codes';
import * as loaderService from '../../services/loader/loader-service';
import { logout } from '../../store/action/counter.actions';

@Injectable()
export class TokenInterceptorService implements HttpInterceptor {
  constructor(
    private toastr: ToastrService,
    private router: Router,
    private store: Store
  ) {}

  ok!: string;
  readonly started = Date.now();
  private AUTH_HEADER = 'authorization';
  readonly token = JSON.stringify(localStorage.getItem('token'))
    .replace(/"/g, '')
    .replace(/\\/g, '');

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    loaderService.pageLoader.sendMessage(true);
    if (req?.params || req?.body) {
      if (this.token !== 'null') {
        const cloned = req.clone({
          headers: req.headers.set(this.AUTH_HEADER, this.token),
        });
        return next
          .handle(cloned)
          .pipe(
            delay(2000),
            finalize(() => {
              const elapsed = Date.now() - this.started;
              const msg = `${req.method} "${req.urlWithParams}" ${this.ok} in ${elapsed} ms.`;
              console.log(msg)
            }),
            tap(
              (event: HttpEvent<any>) =>
                (this.ok = event instanceof HttpResponse ? 'succeeded' : ''),
              (error: HttpErrorResponse) => (this.ok = 'failed')
            ),
            finalize(() => loaderService.pageLoader.sendMessage(false))
          )
          .pipe(
            tap((event: HttpEvent<any>) => {
              if (event instanceof HttpResponse && event.status === 200) {
                loaderService.pageLoader.sendMessage(false);
                this.toastr.success(this.responseErrorMessage(event));
              }
            })
          )
          .pipe(
            catchError((error: HttpErrorResponse) => {
              loaderService.pageLoader.sendMessage(false);
              this.toastr.error(this.responseErrorMessage(error));
              return throwError(error);
            })
          );
      }
    }
    return next
      .handle(req)
      .pipe(
        tap(
          (event: HttpEvent<any>) =>
            (this.ok = event instanceof HttpResponse ? 'succeeded' : ''),
          (error: HttpErrorResponse) => (this.ok = 'failed')
        ),
        delay(2000),

        finalize(() => {
          const elapsed = Date.now() - this.started;
          const msg = `${req.method} "${req.urlWithParams}" ${this.ok} in ${elapsed} ms.`;
        }),
        finalize(() => loaderService.pageLoader.sendMessage(false))
      )
      .pipe(
        catchError((error: HttpErrorResponse) => {
          loaderService.pageLoader.sendMessage(false);
          this.toastr.error(this.responseErrorMessage(error));
          return throwError(error);
        })
      );
  }

  responseErrorMessage(response: any): string {
    let errorMessage = response.status;

    switch (response.status) {
      case ResponseCodes.success:
        return 'Data recieved successfully.';
      case ResponseCodes.badRequest:
        errorMessage = `Request failed. ${response.status} ${response.url}`;
        break;
      case ResponseCodes.unauthorised:
        localStorage.clear();
        this.router.navigate(['/', '/']);
        this.store.dispatch(logout());
        errorMessage = `Authentication failed.`;
        break;
      case ResponseCodes.forbidden:
        errorMessage = `You do not have sufficient permissions.`;
        break;
      case ResponseCodes.notFound:
        errorMessage = `Request failed. Endpoint not found. ${response.status} ${response.url}`;
        break;
      case ResponseCodes.timeOut:
        errorMessage = `Server is taking too long to return response. Please try after sometime.`;
        break;
      case ResponseCodes.serverError:
        errorMessage = `Request failed. Server error. Contact helpdesk. ${response.status} ${response.url}`;
        break;
      default:
        errorMessage = `Request failed. Server error. Contact helpdesk.`;
        break;
    }

    return errorMessage;
  }
}
