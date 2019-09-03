import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ClubsComponent } from './clubs/clubs.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import { PlayersComponent } from './players/players.component';
import { fakeBackendProvider } from './core/interceptor/fake-backend';
import { ReactiveFormsModule, FormControl, FormsModule } from '@angular/forms';
import { AuthGuard } from './core/guards/auth-guard';
import { ErrorInterceptor } from './core/interceptor/error-interceptor';
import { JwtInterceptor } from './core/interceptor/jwt-interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PokemonListComponent } from './pokemon-list/pokemon-list.component';
import { ScrollingModule } from '@angular/cdk/scrolling';
import { MusicSearchComponent } from './music-search/music-search.component';


@NgModule({
  declarations: [
    AppComponent,
    ClubsComponent,
    WelcomeComponent,
    LoginComponent,
    PlayersComponent,
    DashboardComponent,
    PokemonListComponent,
    MusicSearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ScrollingModule
  ],
  providers: [
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
