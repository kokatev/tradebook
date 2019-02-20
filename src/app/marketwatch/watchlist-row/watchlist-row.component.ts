import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';


@Component({
  selector: 'app-watchlist-row',
  templateUrl: './watchlist-row.component.html',
  styleUrls: ['./watchlist-row.component.css']
})
export class WatchlistRowComponent implements OnInit {
  @Input() script: Object;
  @Output() scriptRemoveclick = new EventEmitter();

public removeScriptToListChild(){
    this.scriptRemoveclick.emit();
}
  constructor() {
  }

  ngOnInit() {
  }

}
