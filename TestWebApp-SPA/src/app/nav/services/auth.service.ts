import { HttpClient } from '@angular/common/http';
import { LoginModel } from 'src/app/models/login.model';
import { TokenObject } from 'src/app/models/token.model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable, Subject } from 'rxjs';
import { HttpService } from 'src/app/shared/services/http.service';

@Injectable({ providedIn: 'root' })
export class AuthService extends HttpService {

  private _subject: Subject<any> = new Subject<any>();
  public get subject(): Subject<any> {
    return this._subject;
  }

  constructor(private http: HttpClient) {
    super();
  }

  login(loginModel: LoginModel) {
    return this.http.post(`${this.baseUrl}auth/login`, loginModel).pipe(
      map((tokenObj: TokenObject) => {
        const token = tokenObj;
        if (token) {
          localStorage.setItem('token', token.token);
          localStorage.setItem('exp', token.exp.toString());
          localStorage.setItem('iat', token.iat.toString());
        }
        return tokenObj;
      })
    );
  }

  register(regModel: LoginModel) {
    return this.http.post(`${this.baseUrl}auth/register`, regModel);
  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

  getSubjectOb() {
    return this.subject.asObservable();
  }
}
