import { Component, OnInit } from '@angular/core';
import { IEmployee } from './employee';
import { EmployeeService } from './employee.service';

@Component({
  selector: 'app-employeeList',
  templateUrl: './employeeList.component.html',
  styleUrls: ['./employeeList.component.css'],
  providers:[EmployeeService]
})
export class EmployeeListComponent implements OnInit {
employees:IEmployee[];
 
  constructor(private _employeeService:EmployeeService) {
    
   }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe((empData)=>this.employees=empData);
  }
  getTotalEmployeesCount():number{
    return this.employees.length;
  }
  getTotalMaleEmployeesCount():number{
    return this.employees.filter(e=>e.gender==='Male').length;
  }
  getTotalFemaleEmployeesCount():number{
    return this.employees.filter(e=>e.gender==='Female').length;
  }
  selectedEmployeeCountRadioButton:any ='All';
  message:any ='No messages !!';
  onEmployeeCountRadioButtonChange(selectedValue:string):void{
    this.selectedEmployeeCountRadioButton=selectedValue;
  }
  onHelloPressed(selectedValue:string ):void{
    this.message=selectedValue;
  }
  onHiPressed(selectedValue:string):void{
    this.message=selectedValue;
  }
}
