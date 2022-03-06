import { Component, OnInit } from '@angular/core';
import {COMPANIES} from "../mock-companies";
import {SEGMENTS} from "../mock-segments";



@Component({
  selector: 'app-aviasales-app',
  templateUrl: './aviasales-app.component.html',
  styleUrls: ['./aviasales-app.component.scss']
})
export class AviasalesAppComponent implements OnInit {
  companies = COMPANIES;
  segments = SEGMENTS;
  companyId: any;
  segmentId: any;
  transfers: any;
  constructor() { }

  ngOnInit(): void {

  }


  checkedName: any;

  selected(value: string){
    this.companyId = value;
    console.log('this.companyId',this.companyId )
  }

  checked(value: any) {
    this.checkedName = value;
    console.log(this.checkedName ,"this.checkedName ")

  }




}
