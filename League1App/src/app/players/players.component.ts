import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-players',
  templateUrl: './players.component.html',
  styleUrls: ['./players.component.scss']
})
export class PlayersComponent implements OnInit {

  players = [
    {playerId: 101, firstName: 'Lionel', lastName: 'Messi', club: 'Barcelona', country: 'France', age: 27},
    {playerId: 102, firstName: 'Nicolas', lastName: 'Pepe', club: 'Arsenal', country: 'France', age: 28},
    {playerId: 103, firstName: 'Andy', lastName: 'Robertson', club: 'Liverpool', country: 'France', age: 29},
    {playerId: 104, firstName: 'Mo', lastName: 'Salah', club: 'Liverpool', country: 'France', age: 30},
    {playerId: 106, firstName: 'Sergio', lastName: 'Aguero', club: 'Man City', country: 'France', age: 31},
    {playerId: 107, firstName: 'Dani', lastName: 'Ceballos', club: 'Arsenal', country: 'Spain', age: 31},
    {playerId: 108, firstName: 'Marcus', lastName: 'Rashford', club: 'Man Utd', country: 'England', age: 31},
    {playerId: 109, firstName: 'Kevin', lastName: 'DeBruyne', club: 'Man City', country: 'Belgium', age: 31}
  ];

  constructor() { }

  ngOnInit() {
  }

}
