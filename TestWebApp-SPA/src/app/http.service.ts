import { OnInit } from '@angular/core';
import { HttpHeaders } from '@angular/common/http';

export class HttpService implements OnInit {
  httpHeaders = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: `Bearer ${localStorage.token}`
    })
  };

  ngOnInit(): void {}
}
