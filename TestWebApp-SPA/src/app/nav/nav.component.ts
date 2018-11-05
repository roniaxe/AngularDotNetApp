import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { LoginDialogComponent } from './login/login-dialog.component';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @ViewChild('loginButton')
  logginButton;

  constructor(public loginDialog: MatDialog) {}

  ngOnInit() {}

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  loginLogout(): void {
    if (!this.loggedIn()) {
      const dialogRef = this.loginDialog.open(LoginDialogComponent, {
        width: '350px'
      });

      dialogRef.afterClosed().subscribe(() => {
        this.logginButton._elementRef.nativeElement.className = 'mat-button';
      });
    } else {
      localStorage.clear();
    }
  }
}
