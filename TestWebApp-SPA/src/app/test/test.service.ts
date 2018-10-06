import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../models/blog.model';
import { Observable } from 'rxjs';

@Injectable()
export class TestService {

  constructor(private http: HttpClient) {}

  getBlogs() {
    return this.http.get<Blog[]>('https://localhost:5001/api/blog');
  }
}
