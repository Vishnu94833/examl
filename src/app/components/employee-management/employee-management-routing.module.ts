import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalHeaderService } from '@app/services/globalheader.service';
import { extract } from '@app/core/export';
import { EmployeeManagementComponent } from './employee-management.component';

const routes: Routes = [
  GlobalHeaderService.childRoutes([
    // { path: 'employee', component: EmployeeManagementComponent, data: { title: extract('Employee Management') } }
    { path: 'employee', 
    children: [
            // { path: 'add', component: EmployeeManagementComponent, data: { type: 'addMode' } },
            { path: 'edit/:id', component: EmployeeManagementComponent, data: { type: 'editMode' } },
            { path: 'delete/:id', component: EmployeeManagementComponent, data: { type: 'deleteMode' } }
          ], 
    data: { title: extract('customer') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmployeeManagementRoutingModule { }
