import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatRadioChange} from "@angular/material/radio";

@Component({
  selector: 'app-companies',
  templateUrl: './companies.component.html',
  styleUrls: ['./companies.component.scss']
})

export class CompaniesComponent implements OnInit {
  @Input() companies: any;

  @Output() selectedId: EventEmitter<any> = new EventEmitter();

  constructor() {


  }

  ngOnInit(): void {

  }

  ngAfterViewInit() {
    //this.companies = c
    console.log(this.companies)
  }



  getCheckedValue(value: any) {
    console.log(" Value is : ", value );
    this.selectedId.emit(value.value)



  }
}
