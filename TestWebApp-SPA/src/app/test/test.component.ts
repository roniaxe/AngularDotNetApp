import { Component, OnInit, ViewChild } from '@angular/core';
import { TestService } from './test.service';
import { Blog } from '../models/blog.model';
import { ActivatedRoute } from '@angular/router';
import { MatTableDataSource, MatSort } from '@angular/material';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  displayedColumns: string[] = ['id', 'name'];
  blogs: Blog[];
  dataSource = new MatTableDataSource(this.blogs);

  @ViewChild(MatSort) sort: MatSort;
  constructor(private blogService: TestService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.paramMap.subscribe(map => {
      this.blogService.getBlogs().subscribe((data: Blog[]) => {
        this.blogs = data;
        this.dataSource.data = this.blogs;
        this.dataSource.sort = this.sort;
      });
    });
  }
}
