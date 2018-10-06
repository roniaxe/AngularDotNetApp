import { OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../models/blog.model';

@Injectable()
export class BlogService implements OnInit {

  constructor(private http: HttpClient) {}

  ngOnInit(): void {}

  getBlogs() {
    return this.http.get<Blog[]>('https://localhost:5001/api/blog');
  }

}
