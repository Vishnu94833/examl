import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AttendanceService } from '@app/services/attendance.service';
import { AttendanceViewModel } from '@app/models/view-models/attendance.view.model';
import { JsonPipe } from '@angular/common';

@Component({
  selector: 'app-attendancelist',
  templateUrl: './attendancelist.component.html',
  styleUrls: ['./attendancelist.component.scss']
})
export class AttendancelistComponent implements OnInit {

  public vm: AttendanceViewModel = new AttendanceViewModel();

  constructor(private route:Router,private attendanceList:AttendanceService) { }

  ngOnInit() {
   this.getAttendanceList()
  }

  getAttendanceList(){
    let empId = (this.route.url).split('/')[2];
    this.attendanceList.getAttendances(empId).subscribe(res =>{

      this.vm.attendanceList = this.attendanceList.attendanceData(res,empId)
      console.log(this.vm.attendanceList);
      
    })
  }

  navigateTo(){
    let val = JSON.parse(localStorage.getItem('currentUser'));
    if(val.role === 'ADMIN'){
      this.route.navigate(['homepage/admin'])
    }else if(val.role === 'USER'){
      this.route.navigate([''])
    }
  }
}
