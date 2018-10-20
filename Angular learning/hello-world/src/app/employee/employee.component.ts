import { Component, OnInit } from '@angular/core';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee',
  template: `
    <h2>Employee List</h2>
    <ul *ngfor="let employee of employees">
      <li>{{employee.name}}</li>
    </ul>
  `,
  styles: []
})
export class EmployeeComponent implements OnInit {

  public employees = [];
  constructor(private _employeeService: EmployeeService) { }
  //Make use of service instance and to fetch the employeedata
  ngOnInit() {
    this.employees = this._employeeService.getEmplyees();
  }

}
