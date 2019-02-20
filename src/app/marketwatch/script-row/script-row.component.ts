import { Component, OnInit } from '@angular/core';
import { Input } from '@angular/core';
import { Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-script-row',
  templateUrl: './script-row.component.html',
  styleUrls: ['./script-row.component.css']
})
export class ScriptRowComponent implements OnInit {
  @Input() script: Object;
  @Input() marketWatch;
  @Output() scriptAddclick = new EventEmitter();

public addScriptToListChild(){
    this.scriptAddclick.emit();
}

  constructor() {

  }

  ngOnInit() {

  }
}
