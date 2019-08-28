import { Injectable } from '@angular/core';
//import 'rxjs/add/operator/toPromise';
//import 'rxjs/operator/toPromise';
import {HttpHeaders, HttpClient } from '@angular/common/http';
import { Pokemon } from '../entities/pokemon';

@Injectable({
  providedIn: 'root'
})
export class PokemonListService {
pokeurl: 'https://pokeapi.co/api/v2/pokedex/2/';

constructor(private http: HttpClient) { }

// private handleError(error: any) {
//     let errMsg: string;
//     if (error instanceof Response) {
//       const body = error.json() || '';
//       const err =  JSON.stringify(body);
//       errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
//     } else {
//       errMsg = error.message ? error.message : error.toString();
//     }
//     console.error(errMsg);
//     return Promise.reject(errMsg);
//   }

list() {
  const headers = new HttpHeaders();
  headers.append('Content-Type', 'application/json');
  return this.http.get(this.pokeurl, {headers})
            .toPromise()
            .then((res: any) => {
                const data = res.json();
                const allPokemon = [];
                data.pokemon_entries.forEach((entry) => {
                  const pokemon = new Pokemon();
                  pokemon.name = entry.pokemon_species.name;
                  pokemon.id = entry.entry_number;
                  allPokemon.push(pokemon);
                });
                return allPokemon;
            })
            .catch(null);
    } // End oflist

}
