import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { BlogComponent } from './blog/blog.component';
import { BlogService } from './blog/blog.service';

const routes: Routes = [
  { path: '', component: BlogComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    BlogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }
