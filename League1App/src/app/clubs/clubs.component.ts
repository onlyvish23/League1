import { Component, OnInit } from '@angular/core';
import {ClubsService} from '../services/clubs.service';
import { Club } from '../entities/club';
@Component({
  selector: 'app-clubs',
  templateUrl: './clubs.component.html',
  styleUrls: ['./clubs.component.scss']
})
export class ClubsComponent implements OnInit {

  clubs: Club[] = [];
  constructor(private clubsservice: ClubsService) { }

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

  //Method using Promises
  loaddata_promise() {
    this.clubsservice.getclubs_promise().then((data: any) => {
      if (data !== undefined && data.clubs !== undefined) {
       this.clubs = data.clubs  as Club[];
      }
    });
  }

}
