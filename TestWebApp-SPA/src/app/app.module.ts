import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ReactiveFormsModule } from '@angular/forms';
import { MaterialModule } from './material.module';

import { BlogService } from './blog/blog.service';
import { AuthService } from './nav/services/auth.service';

import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { HomeComponent } from './home/home.component';
import { NavComponent } from './nav/nav.component';
import { LoginDialogComponent } from './nav/login/login-dialog.component';
import { RegisterComponent } from './nav/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'register', component: RegisterComponent }
];

@NgModule({
  entryComponents: [LoginDialogComponent],
  declarations: [
    AppComponent,
    BlogComponent,
    HomeComponent,
    NavComponent,
    LoginDialogComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  providers: [BlogService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {}
