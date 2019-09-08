import { Component, OnInit } from '@angular/core';
import {PokemonListService} from '../services/pokemon-list.service';
import {Pokemon} from '../entities/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {
  public pokemon: Pokemon[] = [];
  private loading = false;

  scrollItems: number[] = [];
  constructor(private pokemonService: PokemonListService) {
    for (let index = 0; index < 1000; index++) {
      this.scrollItems.push(index);
    }
  }

  ngOnInit(): void {
    this.initialize();
  }

  initialize(): void {
      this.pokemonService.getPokemons()
      .subscribe((res: any) => {
        //console.log('Comp JSON: ', JSON.stringify(res));
        if (res !== undefined && res.pokemon_entries !== undefined) {
          res.pokemon_entries.forEach((item) => {
          const p = new Pokemon();
          p.id = item.entry_number;
          p.name = item.pokemon_species.name;
          this.pokemon.push(p);
        });
      }
      });
  }

}
