import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-depatment-list',
  template: `
    <h3>Department List</h3>
    <ul class="items">
      <li (click)="onSelect(department)" *ngFor="let department of departments">
        <span class="badge">{{department.id}} </span> {{department.name}}
      </li>
    </ul>
  `,
  styles: []
})
export class DepatmentListComponent implements OnInit {

  departments =[
    {"id":1, "name": "Angular"},
    {"id":2, "name": "React"},
    {"id":3, "name": "Node"},
    {"id":4, "name": "MangoDB"},
    {"id":5, "name": "Bootstrap"},
    {"id":6, "name": "Jenkins"}
  ]
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onSelect(department)
  {
      this.router.navigate(['/departments', department.id]);
  }

}
