import { Component, OnInit } from '@angular/core';
import { AuthService } from './services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title: 'League';
  constructor(private authservice: AuthService, private router: Router) {}

  ngOnInit(): void {
      console.log('App component');
  }

  userloggedin() {
    return this.authservice.userloggedin();
  }

  logout() {
    this.authservice.logout();
    this.router.navigate(['login']);
  }
}
