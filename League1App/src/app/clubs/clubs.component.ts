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
    this.loaddata();
  }

  loaddata() {
    this.clubsservice.getclubs().subscribe(data => {
      this.clubs = data  as Club[];
    });
  }

}
