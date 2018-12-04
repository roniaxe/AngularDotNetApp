import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

import { LoginDialogComponent } from './login/login-dialog.component';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @ViewChild('loginButton')
  logginButton;

  constructor(public loginDialog: MatDialog, private authService: AuthService) {}

  loggedIn(): boolean {
    return this.authService.loggedIn();
  }

  ngOnInit() {
    this.authService.getSubjectOb().subscribe(_ => {
      this.loginLogout();
    });
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
