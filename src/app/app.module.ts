import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeeCountComponent } from './employeeCount/employeeCount.component';
import { EmployeeListComponent } from './employeeList/employeeList.component';
import { HttpClientModule } from '@angular/common/http';
@NgModule({
   imports: [
      BrowserModule,
      FormsModule,
      ReactiveFormsModule,
      HttpClientModule
   ],
   declarations: [
      AppComponent,
      EmployeeCountComponent,
      EmployeeListComponent
   ],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
