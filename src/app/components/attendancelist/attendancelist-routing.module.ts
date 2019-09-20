import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AttendancelistComponent } from './attendancelist.component';
import { extract } from '@app/core/export';
import { GlobalHeaderService } from '@app/services/globalheader.service';

const routes: Routes = [
  GlobalHeaderService.childRoutes([
    { path: 'attendance-list/:id', component: AttendancelistComponent, data: { title: extract('Attendance List') } }
  ])
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AttendancelistRoutingModule { }
