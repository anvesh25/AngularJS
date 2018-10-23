import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {DepatmentListComponent} from './depatment-list/depatment-list.component';

const routes: Routes = [
  {path: 'departments', component: DepatmentListComponent},
  {path: 'employees', component: EmployeeListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [DepatmentListComponent, EmployeeListComponent]
