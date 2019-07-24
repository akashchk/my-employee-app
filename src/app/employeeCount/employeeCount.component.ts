import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-employeeCount',
  templateUrl: './employeeCount.component.html',
  styleUrls: ['./employeeCount.component.css']
})
export class EmployeeCountComponent  {
 
  selectedRadioButtonValue:string='All';

  messageToDisplay:string='';

@Output()
countRadioButtonSelectionChanged:EventEmitter<string>=new EventEmitter<string>();

@Output()
HelloButtonPressed:EventEmitter<string>=new EventEmitter<string>();

@Output()
HiButtonPressed:EventEmitter<string>=new EventEmitter<string>();

   @Input()
   all:number;
   @Input()
   male:number;
   @Input()
   female:number;
   onRadioButtonSelectionChange(){
     this.countRadioButtonSelectionChanged.emit(this.selectedRadioButtonValue);
     console.log(this.selectedRadioButtonValue);
    }
   onHelloButtonPress(){
    this.messageToDisplay='Hello button is pressed';
    this.HelloButtonPressed.emit(this.messageToDisplay);
    console.log(this.messageToDisplay);
    }
   onHiButtonPress(){
    this.messageToDisplay='Hi button is pressed';
    this.HiButtonPressed.emit(this.messageToDisplay);
    console.log(this.messageToDisplay);
   }
}
