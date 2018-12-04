import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import {
  FormControl,
  Validators,
  AbstractControl,
  FormGroup,
  FormGroupDirective
} from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { LoginModel } from 'src/app/models/login.model';
import { LoginDialogComponent } from '../login/login-dialog.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  form: FormGroup;
  showSpinner: boolean;
  private _errorRegister: HttpErrorResponse;

  constructor(
    private _location: Location,
    private authService: AuthService,
    private router: Router) {}

  get errorRegister(): HttpErrorResponse {
    if (this.form.get('username').dirty) {
      return null;
    }
    return this._errorRegister;
  }
  set errorRegister(value: HttpErrorResponse) {
    this._errorRegister = value;
  }

  back() {
    this._location.back();
  }

  ngOnInit() {
    this.form = new FormGroup(
      {
        username: new FormControl('', [Validators.required, Validators.email]),
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required)
      },
      ConfirmPasswordValidator
    );
  }

  register(formDirective: FormGroupDirective) {
    const regModel: LoginModel = {
      username: formDirective.form.get('username').value,
      password: formDirective.form.get('password').value
    };
    this.authService.register(regModel).subscribe(
      _ => {
        this.router.navigate(['/']);
        this.authService.subject.next();
      },
      (error: HttpErrorResponse) => {
        this.errorRegister = error;
        formDirective.resetForm();
        formDirective.form.reset();
      }
    );
  }
}

export function ConfirmPasswordValidator(control: AbstractControl) {
  const pass = control.get('password');
  const confirmPass = control.get('confirmPassword');

  if (pass.value !== confirmPass.value) {
    console.log('confirm password failed');
    control.get('confirmPassword').setErrors({
      confirmPass: true
    });
  } else {
    console.log('match passwords');
    return null;
  }
}
