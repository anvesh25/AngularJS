import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor() { }

  //cretae getEmployee and array list
  getEmplyees(){
    return[
      {"id":1, "name": "Anvesh", "age":27},
      {"id":2, "name": "Amulya", "age":24},
      {"id":3, "name": "Maithili", "age":27},
      {"id":4, "name": "Mahendra", "age":29}
    ];
  }
}
