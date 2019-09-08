import { Component, OnInit } from '@angular/core';
import {ClubsService} from '../services/clubs.service';
import { Club } from '../entities/club';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements OnInit {

  clubs: Club[] = [];
  constructor(private clubsservice: ClubsService, private router: Router) { }

  ngOnInit() {
    this.loaddata_promise();
  }

  // Method using Observables
  loaddata() {
    this.clubsservice.getclubs().subscribe((data: any) => {
      if (data !== undefined && data.clubs !== undefined) {
       this.clubs = data.clubs  as Club[];
      }
    });
  }

  // Method using Promises
  loaddata_promise() {
    this.clubsservice.getclubs_promise().then((data: any) => {
      if (data !== undefined && data.clubs !== undefined) {
       this.clubs = data.clubs  as Club[];
       sessionStorage.setItem('clubs', JSON.stringify(this.clubs));
      }
    });
  }

  addclub() {
    this.router.navigate(['/addclub']);
  }


}
