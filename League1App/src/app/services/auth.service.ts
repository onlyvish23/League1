import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(username: string, password: string) {
      return this.http.post<any>('/users/authenticate/', {username, password}).pipe(
        map(user => {
            if (user) {
              user.authdata = window.btoa(username + ':' + password);
              localStorage.setItem('currentUser', JSON.stringify(user));
            }
        }
        )
      );
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
