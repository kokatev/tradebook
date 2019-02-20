import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-marketwatch',
  templateUrl: './marketwatch.component.html',
  styleUrls: ['./marketwatch.component.css']
})
export class MarketwatchComponent implements OnInit {
public modalRef: BsModalRef;
public searchQuery: string;
public scripts = [
  {"name": "Infy", "CMP": "100.02"},
  {"name": "ITI", "CMP": "140.02"},
  {"name": "Idea", "CMP": "10.02"},
  {"name": "BEPL", "CMP": "133.02"},
  {"name": "Apollo", "CMP": "1040.02"},
  {"name": "TCS", "CMP": "320.02"},
  {"name": "Yesbank", "CMP": "110.02"},
  {"name": "HCC", "CMP": "130.02"}
];
searchResult = [];
watchlist = [];
  constructor() { }

  public addScriptToList (script) {
    let found = false;
    this.watchlist.forEach(function (val){
      if(val.name==script.name){
        found = true;
      }
    });
    if(!found){
    this.watchlist.push(script)
    }
  }

  public removeScriptFromList (script) {
    let remove;
    this.watchlist.forEach(function (val,i){
      if(val.name==script.name){
        remove = i;
      }
    });
    this.watchlist.splice(remove,1);
  }

  public onKey(event: any){
    this.searchResult = [];
    this.searchQuery = event.target.value;
    if(this.searchQuery!=''){
      this.scripts.forEach( obj =>{
        if(obj.name.toUpperCase().indexOf(this.searchQuery.toUpperCase())>-1){
          this.searchResult.push(obj);
        }
      });
    }
  }
  ngOnInit() {
  }
}
