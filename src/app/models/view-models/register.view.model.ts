import { RegisterModel } from "../register.model";

export class RegisterViewModel{
    registerArray: RegisterModel = new RegisterModel();
    registerCred: RegisterModel = new RegisterModel();
    public employeeList: Array<RegisterModel> = new Array<RegisterModel>();
}