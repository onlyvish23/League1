import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Club} from '../../app/entities/club';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ClubsService {
  private dataurl = '../../assets/db.json';
  constructor(private http: HttpClient) {}

  getclubs(): Observable<Club[]> {
    const response = this.http.get<Club[]>(this.dataurl).pipe(
      tap(data => console.log(JSON.stringify(data)))
    );
    return response;
  }

  getclubs_promise() {
    const promise = new Promise((resolve, reject) => {
        this.http.get(this.dataurl)
          .toPromise()
          .then(res => {
            resolve(res);
          })
          .catch(error => {
            reject(error);
          });
    });
    return promise;
  }
}

