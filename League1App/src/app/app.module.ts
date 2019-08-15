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
import { ReactiveFormsModule } from '@angular/forms';
import { AuthGuard } from './core/guards/auth-guard';
import { ErrorInterceptor } from './core/interceptor/error-interceptor';
import { JwtInterceptor } from './core/interceptor/jwt-interceptor';
import { DashboardComponent } from './dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    ClubsComponent,
    WelcomeComponent,
    LoginComponent,
    PlayersComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
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
