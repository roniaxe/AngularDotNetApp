import { OnInit, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Blog } from '../models/blog.model';
import { HttpService } from '../shared/services/http.service';

@Injectable()
export class BlogService extends HttpService implements OnInit  {

  constructor(private http: HttpClient) {
    super();
  }

  ngOnInit(): void {}

  getBlogs() {
    return this.http.get<Blog[]>(`${this.baseUrl}api/blog`, this.httpHeaders);
  }

}
