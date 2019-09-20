import { AttendanceModel } from "../attendance.model";

export class AttendanceViewModel{
    attendnce: AttendanceModel = new AttendanceModel();

    attendanceList : Array<AttendanceModel> = new Array<AttendanceModel>();
}