import { Injectable } from "@angular/core";
import { IEmployee } from "./employee";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import 'rxjs/add/operator/map';
 

@Injectable()
export class EmployeeService {
 
    
    constructor(private http: HttpClient) {
        
        
         
    } 
    
    getEmployees():Observable<IEmployee[]>{
        return this.http.get('http://5d3720e886300e0014b64b3c.mockapi.io/api/v1/employees').map((response:Response)=><IEmployee[]>response)
    }
     
}