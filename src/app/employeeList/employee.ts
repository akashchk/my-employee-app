import { GenericBrowserDomAdapter } from "@angular/platform-browser/src/browser/generic_browser_adapter";

export interface IEmployee {
    code:string;
    name:string;
    gender:string;
    salary:number;
     
  }
  export class Employee implements IEmployee{
     
    constructor(public code:string,public name:string,public gender:string,public salary:number) {
       
    }
     
  }