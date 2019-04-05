import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";

@Component({
  selector: 'app-holdings',
  templateUrl: './holdings.component.html',
  styleUrls: ['./holdings.component.css']
})
export class HoldingsComponent implements OnInit {
  buyScriptForm: FormGroup;
  submitted = false;
  success = false;

  constructor(private fbuilder: FormBuilder) { }

  ngOnInit() {
    this.buyScriptForm =  this.fbuilder.group({
      scriptName: ['dd', Validators.compose([Validators.required, Validators.minLength(2)])],
      qty: ['1', Validators.min(1)]
    });
    console.log(this.buyScriptForm.value);   
    console.log(this.buyScriptForm);  
  }

  get f() { return this.buyScriptForm.controls; }
  formSubmit = () => {
    this.submitted = true;
    if(this.buyScriptForm.invalid){
      return;
    }
    this.success = true;
  }
}
