import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HttpwrapperService {

  constructor(private http: HttpClient) { }

  getData(currenturl: string) {
    return this.http.get<any>(currenturl).pipe(catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
    if (errorResponse.error instanceof ErrorEvent) {
        console.error('Client side error: ', errorResponse.error.message);
      } else {
        console.error('Server side error: ', errorResponse);
      }
    return throwError('Error in service call');
}

  // currenturl = this.dataurl.asObservable();

  // seturl(url: string) {
  //   this.dataurl.next(url);
  // }

  // geturl(): string {
  //     const result = this.dataurl.subscribe(data => data);
  //     return result;
  // }

}
