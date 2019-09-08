import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClubsComponent } from './clubs/clubs.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlayersComponent } from './players/players.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/guards/auth-guard';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { MusicSearchComponent } from './music-search/music-search.component';
import { ClubComponent } from './clubs/club/club.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'clubs', component: ClubsComponent, canActivate: [AuthGuard] },
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'players', component: PlayersComponent},
  {path: 'pokemons', component: PokemonListComponent},
  {path: 'musicsearch', component: MusicSearchComponent},
  {path: 'addclub', component: ClubComponent},
  {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
