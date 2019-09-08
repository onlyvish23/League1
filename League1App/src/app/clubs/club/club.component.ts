import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidatorFn, FormArray } from '@angular/forms';
import {Club, MetaData, MetaValue, MetaList} from '../../entities/club';
import { HttpwrapperService } from 'src/app/services/httpwrapper.service';

@Component({
  selector: 'app-club',
  templateUrl: './club.component.html',
  styleUrls: ['./club.component.scss']
})
export class ClubComponent implements OnInit {
  clubform: FormGroup;
  public club: Club;
  private metaurl = '../../assets/meta.json';
  date1: Date;
  constructor(private fb: FormBuilder, private service: HttpwrapperService) {
    // this.club = Club;
  }

  ngOnInit() {
    this.initialize();
  }
  // convenience getters for easy access to form fields
  get f() { return this.clubform.controls; }
  get t() { return this.f.items as FormArray; }

  initialize() {
    this.clubform = this.fb.group({
        clubname: ['', [Validators.required, Validators.minLength(3)]],
        date1: ['', Validators.required],
        items: this.fb.array([this.buildItem()])
    });

    //this.clubform.setValue({clubname: 'Arsenal', date1: new Date(), items: []});

    this.service.getData(this.metaurl).subscribe(data => {
      if (data !== undefined && data.items !== undefined) {
        data.items.forEach(element => {
          // this.metalist.push(element);
        });
        //console.log(JSON.stringify(data));
      }
    });
  }

  buildItem(): FormGroup {
    return this.fb.group({
      name : ['', [Validators.required, Validators.minLength(3)]]
    });
  }

  addrecord() {
    this.t.push(this.buildItem());
  }

  save() {
    console.log('Saved: ', JSON.stringify(this.clubform.value));
  }

}
