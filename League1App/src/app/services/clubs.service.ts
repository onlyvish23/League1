import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Club} from '../../app/entities/club';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ClubsService {
  dataurl = 'http://localhost:3000/clubs';
  //dataurl = 'testdata/db.json';
  constructor(private http: HttpClient) {}

  getclubs(): Observable<Club[]> {
    const response = this.http.get<Club[]>(this.dataurl).pipe(
      tap(data => console.log(JSON.stringify(data)))
    );
    return response;
  }
}

