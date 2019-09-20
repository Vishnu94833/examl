import { Customers } from "../customers.model";
import { GenderDropdownModel } from "../gender-dropdown.model";
import { CountryDropdownModel } from "../country.model";
import { RegisterModel } from "../register.model";

export class EmployeeModel {
    public employeeList: Array<RegisterModel> = new Array<RegisterModel>();
    public customerList: Array<Customers> = new Array<Customers>();
    newEmployee: Customers = new Customers();
    public gender: Array<GenderDropdownModel> = new Array<GenderDropdownModel>();
    // public CountryList : Array<CountryDropdownModel> = new Array<CountryDropdownModel>();
    cntry : string = '';
    searchCustomer: string = '';
    customerId : number = 0;
    // buttons display
    isUpdateBtnDisplay: boolean = false;
    isDeleteBtnDisplay: boolean = false;
    isAddBtnDisplay: boolean = false;
 
}