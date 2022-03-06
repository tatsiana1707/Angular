import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {MatCheckboxChange} from "@angular/material/checkbox";

@Component({
  selector: 'app-transfers',
  templateUrl: './transfers.component.html',
  styleUrls: ['./transfers.component.scss']
})
export class TransfersComponent implements OnInit {

    @Input() segments: any;
    @Output() checked: EventEmitter<any> = new EventEmitter();
    transfers: FormGroup;
    isChecked: boolean | undefined;



    constructor(fb: FormBuilder) {
        this.transfers = fb.group({
            0: false,
            1: false,
            2: false,
            3: false,
        });
    }


    ngOnInit() {}


    ngAfterViewInit(){
        console.log(this.transfers.value)
}

    onChange(ob: MatCheckboxChange) {
        let result: number[] = []
        if(ob.checked){
            let key:any  = Object.keys(this.transfers.value);
            let value:any = Object.values(this.transfers.value)
            console.log('value', value)
               if(value && value.length > 0) {
                   value.forEach((v: boolean, i: number) => {
                      if (v) {
                          result.push(i)
                          console.log(result)
                   }

               })
               }
            this.checked.emit(result)
        }
    }
}


