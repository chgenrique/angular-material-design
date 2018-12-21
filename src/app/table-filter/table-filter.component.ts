import { Component, OnInit } from '@angular/core';

export interface Market {
  id: string;
  name: string;
  checked: boolean;
  offices?: Office[];
}

export interface Office {
  id: string;
  name: string;
  checked: boolean;
}

@Component({
  selector: 'app-table-filter',
  templateUrl: './table-filter.component.html',
  styleUrls: ['./table-filter.component.css']
})
export class TableFilterComponent implements OnInit {

  selectedMarket : string;
  marketSelected: Market[] = [];
  markets: Market[] = [
    {id: '101', name: 'FL', 'checked': false, offices:[
      {'id': '02', 'name': 'Miami Gardens', 'checked': false},
      {'id': '03', 'name': 'Miami Lakes', 'checked': false},
      {'id': '04', 'name': 'Hialeah', 'checked': false},
      {'id': '06', 'name': 'Coral Gables', 'checked': false},
    ]},
    {id: '102', name: 'KL',  'checked': false, offices:[
      {'id': '05', 'name': 'Kentuky',  'checked': false},
      {'id': '07', 'name': 'Louisvile', 'checked': false},
      {'id': '09', 'name': 'Frankfort', 'checked': false}
    ]},
    {id: '103', name: 'VA',  'checked': false, offices:[
      {'id': '10', 'name': 'Virginia',  'checked': false},
    ]},
  ];

  offices: Office[];

  constructor() { }

  ngOnInit() {
  }

  selectOnchange(event) {
    console.log(event);
    event.value.checked = !event.value.checked;
    this.offices = event.value.offices;

  /*  let selectedValue = event.value.offices[0].id;
    let officesFilter = this.offices.filter(function( o ) {
      return o.id == selectedValue;
  }); */
}

selectOnchangeMarket(event) {
    console.log(event);
    if (typeof this.marketSelected != "undefined" && this.marketSelected.length)
    {
      console.log('previous select');
      this.offices = this.offices.concat(event.value.offices);
      console.log(this.offices);
      this.marketSelected.push(event.value);
    } else {
      this.marketSelected.push(event.value);
      this.offices = event.value.offices;
    }
 
    /*
    this.marketSelected.forEach(element => {
      element.checked = true;
      this.offices.concat(element.offices);
    }); */
   
    
    console.log(this.marketSelected);
    var len = this.marketSelected.length;
    /*this.offices = this.marketSelected[0].offices;
    for (var i = 1; i < len + 1; i++) {
      this.offices.concat(this.marketSelected[i].offices);
    }*/
    
    //this.offices = this.markets.find(con => con.id == event.value).offices;
  }

  onChangeOffice(office)
  {
     console.log(office);
  }

}
