import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { NgbTooltipConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm!: FormGroup;
  validOldPassword: boolean = false;
  validConfirmPassword: boolean = true;

  constructor(config: NgbTooltipConfig) {
    config.placement = 'right';
    config.triggers = 'hover';
  }

  oldPassword: string = '';
  newPassword: string = '';
  confirmPassword: string = '';

  ngOnInit(): void {
    this.initForm();
  }

  comparePasswords(oldPassword: string, newPassword: string, confirmPassword: string) {
    if (oldPassword && newPassword && oldPassword === newPassword) {
      this.validOldPassword = true;
    } else {
      this.validOldPassword = false;
    }

    if (newPassword && confirmPassword && newPassword === confirmPassword) {
      this.validConfirmPassword = true;
    } else {
      this.validConfirmPassword = false;
    }
  }

  private initForm() {
    this.forgotPasswordForm = new FormGroup({
      'oldPassword': new FormControl(null, [
        Validators.minLength(8),
        Validators.required,
        Validators.pattern("^(?=.*[0-9])(?=.*[!@$&*])[a-zA-Z0-9!@$&*]{8,}$")
      ]),
      'newPassword': new FormControl(null, [
        Validators.minLength(8),
        Validators.required,
        Validators.pattern("^(?=.*[0-9])(?=.*[!@$&*])[a-zA-Z0-9!@$&*]{8,}$")
      ]),
      'confirmPassword': new FormControl(null, [
        Validators.minLength(8),
        Validators.required,
        Validators.pattern("^(?=.*[0-9])(?=.*[!@$&*])[a-zA-Z0-9!@$&*]{8,}$")
      ])
    });
  }

  onSubmit() {
    alert(this.forgotPasswordForm.controls['newPassword'].value);
    alert(this.forgotPasswordForm.controls['confirmPassword'].value);
  }
}
