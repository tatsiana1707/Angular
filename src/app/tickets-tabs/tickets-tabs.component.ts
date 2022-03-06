import {ChangeDetectorRef, Component, Input, OnDestroy, OnInit, SimpleChanges, ViewChild} from '@angular/core';
import { Ticket } from '../ticket';
import { Company } from '../company';
import { Segment } from '../segment';
import { TICKETS } from '../mock-tickets';
import { SEGMENTS } from "../mock-segments";
import { COMPANIES } from "../mock-companies";

import {MatCardModule} from '@angular/material/card';
import {MatPaginator} from "@angular/material/paginator";
import {filter, Observable} from "rxjs";
import {MatTableDataSource} from "@angular/material/table";
import {T} from "@angular/cdk/keycodes";

let DATA: Ticket[] = TICKETS;

@Component({
  selector: 'app-tickets-tabs',
  templateUrl: './tickets-tabs.component.html',
  styleUrls: ['./tickets-tabs.component.scss']
})

export class TicketsTabsComponent implements OnInit {
  @Input() selectedId: any;
  @Input() checked: any | undefined;
  @Input() stops: number[] | undefined;

  tickets = TICKETS;
  companies = COMPANIES
  segments = SEGMENTS;
  arr = [];
  company: any;
  segment: any;
  filteredTickets: any;
  checkedArr: any;
  ticket: Ticket | undefined
  private ticketSegments: any;
  private segmentArr: string | undefined;

  //private currents: any;

  constructor() {

  }


  ngOnInit(): void {
    this.filteredTickets = this.tickets;

    console.log(this.filteredTickets)


  }
  ngAfterViewInit() {
    console.log('selectedId', this.selectedId)


  }

  ngOnChanges(changes: SimpleChanges, arr: []){

    console.log('changes', changes)
    if(changes && changes['selectedId'] && changes['selectedId'].currentValue){
      let id = changes['selectedId'].currentValue;



     console.log(id, 'this.id')
    //  console.log(currents, 'this.checked')
    if(id !== null) {
      this.filteredTickets = this.tickets.filter(ticket => ticket.companyId === changes['selectedId'].currentValue)
     console.log(this.filteredTickets)
   } else {
      this.filteredTickets = this.tickets;
      console.log(this.filteredTickets)

   }


    }
    console.log('this.stops', this.stops)
    if(this.stops && this.stops.length > 0){
      this.filterCompanyByStops(this.filteredTickets)
    }
  }


  getLogo(companyId: any) {
    let logos:Company | undefined = this.companies.find(item => item.id === companyId);
    return logos ?  'assets/' + logos.logo : '';
  }


  displayCards(tickets: MouseEvent) {
    this.tickets = this.filteredTickets;


  }

  filterCompanyByStops(filteredArr: any){
    console.log(this.stops)
    this.stops?.forEach(st => {
      if(st == 2) {

        let stopsArr1 = filteredArr.filter((val: any) => val.segments.length == st)
        console.log(stopsArr1)
        let arr: any = []
        stopsArr1.forEach((el:any) => {
          if(el.segments > 0){}
          el.segments.forEach((seg: any) => {
            let currentSeg = this.segments.find(s => s.id === seg)
            console.log(currentSeg)
            // @ts-ignore
            if(el?.segments?.stops?.length === currentSeg?.stops?.length){
              arr.push(currentSeg)
            }
           // this.stops.find(st => st.length === )
            //  arr.push(currentSeg)
            console.log(this.segments);
            console.log(seg)
            console.log(el)
          //  console.log(currentSeg)
            console.log(arr)
          })
        } )
      }


     // console.log('stopsArr',stopsArr1)
    })

  }
}
