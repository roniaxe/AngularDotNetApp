import { HttpClient } from '@angular/common/http';
import { LoginModel } from 'src/app/models/login.model';
import { TokenObject } from 'src/app/models/token.model';
import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';

@Injectable()
export class AuthService {
  private readonly baseUrl = 'https://localhost:5001/api/auth/';

  constructor(private http: HttpClient) {}

  login(loginModel: LoginModel) {
    return this.http.post(this.baseUrl + 'login', loginModel).pipe(
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
}
