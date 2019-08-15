import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClubsComponent } from './clubs/clubs.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlayersComponent } from './players/players.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './core/guards/auth-guard';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'clubs', component: ClubsComponent, canActivate: [AuthGuard] },
  {path: 'welcome', component: WelcomeComponent},
  {path: '', redirectTo: 'welcome', pathMatch: 'full'},
  {path: 'players', component: PlayersComponent},
  {path: '**', redirectTo: 'welcome', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
