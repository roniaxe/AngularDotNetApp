import { Component, OnInit, ViewChild } from '@angular/core';
import { Blog } from '../models/blog.model';
import { BlogService } from './blog.service';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { MatSort, MatTableDataSource } from '@angular/material';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blogs: Blog[];
  displayedColumns: string[] = ['id', 'name'];
  @ViewChild(MatSort) sort: MatSort;
  dataSource: MatTableDataSource<Blog> = new MatTableDataSource();

  constructor(private blogService: BlogService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe((paramMap: ParamMap) => {
      this.getBlogs();
    });
    this.dataSource.sort = this.sort;
  }

  getBlogs() {
    this.blogService.getBlogs().subscribe((blogs: Blog[]) => {
      this.blogs = blogs;
      console.log(this.blogs);
      this.dataSource.data = this.blogs;
    });
  }

}
