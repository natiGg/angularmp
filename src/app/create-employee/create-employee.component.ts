import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { EmployeeService } from '../employee.service';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit{

  employee:Employee=new Employee();

  constructor(private employeeService:EmployeeService,private router:Router) {
    
  }
  OnSubmit(){
    console.log(this.employee)
    this.saveEmployee();

    this.goToEmplist();
  }
  saveEmployee(){
    this.employeeService.createEmployee(this.employee).subscribe(data=>{
     console.log(data);
    },
    
    error=>console.log(error));
  }

  goToEmplist(){
    this.router.navigate(['/employees']);
  }
  ngOnInit(): void {
      
  }

}
