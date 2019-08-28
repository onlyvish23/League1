import { Component, OnInit } from '@angular/core';
import {PokemonListService} from '../services/pokemon-list.service';
import {Pokemon} from '../entities/pokemon';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnInit {

  scrollItems: number[] = [];
  constructor(private pokemonService: PokemonListService) {
    for (let index = 0; index < 1000; index++) {
      this.scrollItems.push(index);
    }
  }

  pokemon: Pokemon[];

  ngOnInit(): void {
    this.initialize();
  }

  initialize(): void {
    this.pokemonService.list()
    .then((pokemon) => {
      this.pokemon = pokemon;
    });
  }

}
