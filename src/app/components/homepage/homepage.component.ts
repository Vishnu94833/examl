import { Component, OnInit } from '@angular/core';
import { HomepageViewModel } from '@app/models/view-models/homepage.view.model';
import { ActivatedRoute, Router } from '@angular/router';
import { AttendanceService } from '@app/services/attendance.service';
import { HomepageModel } from '@app/models/homepage.model';
import * as moment from 'moment';
import { CustomerService } from '@app/services/customer.service';
import { EmployeeModel } from '@app/models/view-models/employee.model';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {

  // public vm: HomepageViewModel = new HomepageViewModel();
  public vm: EmployeeModel = new EmployeeModel();

  constructor(private activatedRoute: ActivatedRoute,
    private attendanceService: AttendanceService,
    private cust: CustomerService,
    private route : Router) { }

  ngOnInit() {
    this.getEmployees()
  }


  getEmployees(){
    this.cust.getCustomers().subscribe(res => {
      console.log(res);
      
      this.bindEmployeeData(res)
    })
  }

  bindEmployeeData(res:any){
    this.vm.employeeList = this.cust.customers(res);
    console.log(this.vm.employeeList);
    
  }

  viewAttendance(res:string){
    console.log(res);
    this.route.navigate(['attendance-list',res])
  }

  editCustomer(res:any){
    this.route.navigate(['employee/edit',res.id])
  }

  deleteCustomer(res:any){
    this.route.navigate(['employee/delete',res.id])
  }
}
