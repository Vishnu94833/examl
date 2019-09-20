import { Component, OnInit } from '@angular/core';
import { LoginViewModel } from '@app/models/view-models/login.view.model';
import { RegisterViewModel } from '@app/models/view-models/register.view.model';
import { RegisterModel } from '@app/models/register.model';
import { RegisterService } from '@app/services/register.service';
import { EncryptpasswordService } from '@app/services/encryptpassword.service';
import * as moment from 'moment';
import { UserService } from '@app/services/user.service';
import { CustomerService } from '@app/services/customer.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  public vm: RegisterViewModel = new RegisterViewModel();

   role = [
    { Label:'Select Role...',Value:'Default'},
    { Label:'ADMIN',Value:'ADMIN'},
    { Label:'USER',Value:'USER'}
  ]

  constructor(private registerService: RegisterService,
              private pswdEncrypt: EncryptpasswordService,
              private userService:UserService,
              private custService:CustomerService) { }

  ngOnInit() { 
    this.vm.registerArray.role = this.role[0].Label;
  }

  // register(response: RegisterModel) {
  //   let register: RegisterModel = new RegisterModel();
  //   register.email = response.email
  //   register.password = this.pswdEncrypt.set("0123456789123456", response.password);
  //   register.userName = response.userName
  //   this.registerService.registerNew(register).subscribe(res =>
  //     console.log(res)
  //   )
  // }

  register(response:RegisterModel){
    console.log(response);
    
    this.userService.register(response).subscribe((res:any) => {

    })
    this.addRegisteredUserToJSON(response);  
  }

  onRoleSelect(event:any){
    this.vm.registerArray.role = event;
  }

  addRegisteredUserToJSON(res:RegisterModel){
    this.custService.addCustomer(res).subscribe(result => {
      console.log(result);
    })
  }
}
