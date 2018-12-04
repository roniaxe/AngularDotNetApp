import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';

import { AuthService } from '../services/auth.service';
import { LoginModel } from 'src/app/models/login.model';

@Component({
  selector: 'app-login-dialog',
  templateUrl: 'login-dialog.component.html',
  styleUrls: ['./login-dialog.component.css']
})
export class LoginDialogComponent implements OnInit {
  loginForm: FormGroup;
  unauth: HttpErrorResponse;

  constructor(
    public dialogRef: MatDialogRef<LoginDialogComponent>,
    private authSevice: AuthService
  ) {}

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required])
    });
  }

  get form() {
    return this.loginForm.controls;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmit() {
    this.unauth = null;

    if (this.loginForm.invalid) {
      return;
    }

    const loginModel: LoginModel = {
      username: this.loginForm.controls.username.value,
      password: this.loginForm.controls.password.value
    };

    this.authSevice.login(loginModel).subscribe(
      () => {
        this.dialogRef.close();
      },
      (error: HttpErrorResponse) => {
        this.unauth = error;
      }
    );
  }
}
