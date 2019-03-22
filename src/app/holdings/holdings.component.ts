import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.css']
})
export class HoldingsComponent implements OnInit {
  buyScriptForm: FormGroup;
  submitted = true;
  success = false;

  constructor(private fbuilder: FormBuilder) { }

  ngOnInit() {
    this.buyScriptForm =  this.fbuilder.group({
      scriptName: ['dd', Validators.compose([Validators.required, Validators.minLength(4)])],
      qty: ['1', Validators.min(1)]
    });
    console.log(this.buyScriptForm.value);   
    console.log(this.buyScriptForm);  
  }

}
