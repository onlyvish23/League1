import { Injectable } from '@angular/core';
// import 'rxjs/operator/toPromise';
import { HttpHeaders, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Pokemon } from '../entities/pokemon';
import { Observable, throwError } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class PokemonListService {
  // private pokeurl: 'https://pokeapi.co/api/v2/pokedex/2/';
  // private pokeurl = 'http://localhost:3000/testdata/pokemons/pokemon_entries';
  private pokeurl = '../../assets/pokemons.json';

  constructor(private http: HttpClient) { }

  getPokemons(): Observable<any[]> {
    const headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get(this.pokeurl, {headers })
      .pipe(
        map((res: any) => {
          console.log('JSON Data: ', JSON.stringify(res));
          return res;
        }),
        catchError(this.handleError));
  }

  private handleError(errorResponse: HttpErrorResponse) {
      if (errorResponse.error instanceof ErrorEvent) {
          console.error('Client side error: ', errorResponse.error.message);
        } else {
          console.error('Server side error: ', errorResponse);
        }
      return throwError('Error in service call');
  }

  list() {
    return this.http.get(this.pokeurl);
  }
}
