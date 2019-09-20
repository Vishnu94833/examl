import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AttendancelistRoutingModule } from './attendancelist-routing.module';
import { AttendancelistComponent } from './attendancelist.component';

@NgModule({
  declarations: [AttendancelistComponent],
  imports: [
    CommonModule,
    AttendancelistRoutingModule
  ]
})
export class AttendancelistModule { }
