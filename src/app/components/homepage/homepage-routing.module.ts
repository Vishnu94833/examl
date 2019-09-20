import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalHeaderService } from '@app/services/globalheader.service';
import { extract } from '@app/core/export';
import { HomepageComponent } from './homepage.component';

const routes: Routes = [
  GlobalHeaderService.childRoutes([
    { path: 'homepage',  children: [
      // { path: 'add', component: EmployeeManagementComponent, data: { type: 'addMode' } },
      { path: 'admin', component: HomepageComponent, data: { type: 'ADMIN' } },
      { path: 'user', component: HomepageComponent, data: { type: 'USER' } }
    ], data: { title: extract('Homepage') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomepageRoutingModule { }
