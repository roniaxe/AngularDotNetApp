import { Component, OnInit, ViewChild } from '@angular/core';
import { Blog } from '../models/blog.model';
import { BlogService } from './blog.service';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs: Blog[];

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.getBlogs();
    });
  }

  getBlogs() {
    this.blogService.getBlogs().subscribe((blogs: Blog[]) => {
      this.blogs = blogs;
      console.log(this.blogs);
    });
  }

}
