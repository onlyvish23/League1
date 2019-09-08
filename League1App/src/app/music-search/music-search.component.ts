import { Component, OnInit } from '@angular/core';
import { SearchMusicService } from '../services/search-music.service';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';

@Component({
  selector: 'app-music-search',
  templateUrl: './music-search.component.html',
  styleUrls: ['./music-search.component.scss']
})
export class MusicSearchComponent implements OnInit {
  public loading = false;
  constructor(private searchMusic: SearchMusicService ) { }

  ngOnInit() {
  }

  doSearch(term: string) {
    this.loading = true;
    this.searchMusic.search('maroon').then(_ => (this.loading = false));
  }
}
