import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { AttendanceModel } from '@app/models/attendance.model';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { RestApiConstComponent } from 'rest-api-const.component';
import { HomepageModel } from '@app/models/homepage.model';


@Injectable({
  providedIn: 'root'
})
export class AttendanceService {

  baseUrl = environment.apiBaseUrl

  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  constructor(private http: HttpClient) { }

  postAttendance(res: AttendanceModel) {
    console.log(res);
    
    let request = {
      date: moment(res.date).format("DD MMM YYYY"),
      inTime : moment(res.inTime, "HH:mm:ss ").format("HH:mm A"),
      outTime: moment(res.outTime, "HH:mm:ss ").format("HH:mm A"),
      totalTime : res.totalWorkingHrs,
      totalWorkingTime:res.totalWorkingHours
    }
    return this.http.post<AttendanceModel>(`${this.baseUrl}/` + res.employeeId, request, this.httpOptions)
  }

  getAttendances(res : string): Observable<AttendanceModel> {
    return this.http.get<AttendanceModel>(`${this.baseUrl}/`+ res)
  }

  timeDuration(startTime: any, endTime: any) {
    let mins = moment.utc(moment(endTime, "HH:mm:ss ").diff(moment(startTime, "HH:mm:ss"))).format("HH ")
    return mins;
  }

  attendanceData(response:any,id:string){
    let list : Array<AttendanceModel> = new Array<AttendanceModel>();
    response.forEach((item: any) => {
      let obj = new AttendanceModel();
      obj.employeeId = id
      obj.date = item.date
      obj.inTime = item.inTime
      obj.outTime = item.outTime
      obj.totalWorkingHrs = item.totalTime
      obj.avgWorkingHrs = item.totalWorkingTime
      
      list.push(obj)
    });
    return list;
  }

  clearAttendanceData(res:string,id:number){
    return this.http.delete(`${this.baseUrl}/` + res+'/'+id)
  }

  validDate(){

  }
}
