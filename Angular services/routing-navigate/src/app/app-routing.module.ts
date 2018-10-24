import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {DepatmentListComponent} from './depatment-list/depatment-list.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DepartmentDetailComponent } from './department-detail/department-detail.component';

const routes: Routes = [
  //{path:' ', component: DepatmentListComponent},
  //it will route to mentioned component can be prefix to any given path
  //{path:'', redirectTo:'/departments', pathMatch:'prefix'},
  //This basically says redirect only if full URL is empty
  {path:'', redirectTo:'/departments', pathMatch:'full'},
  {path: 'departments', component: DepatmentListComponent},
  {path: 'departments/:id', component: DepartmentDetailComponent},
  {path: 'employees', component: EmployeeListComponent},
  //Wildcard route should always be last row in the configuration
  {path: "**", component:PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponent = [DepatmentListComponent, 
                                 DepartmentDetailComponent,                               
                                 EmployeeListComponent,
                                 PageNotFoundComponent]
