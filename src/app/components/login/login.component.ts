import { Component, OnInit } from '@angular/core';
import { LoginService } from '@app/services/login.service';
// import { LoginModel } from '@app/models/login';
import { LoginViewModel } from '@app/models/view-models/login.view.model';
import { LoginModel } from '@app/models/login.model';
import { EncryptpasswordService } from '@app/services/encryptpassword.service';
import { Router } from '@angular/router';
import { AuthenticationService } from '@app/services/authentication.service';
import { first } from 'rxjs/operators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  userName: string;
  pswd: string = '123456789';
  public vm: LoginViewModel = new LoginViewModel();
  returnUrl: any;

  constructor(private loginService: LoginService,
    private pswdEncrypt: EncryptpasswordService,
    private route: Router,
    private auth:AuthenticationService) { }

  

  ngOnInit() { 
  console.log(JSON.parse(localStorage.getItem('currentUser')));
  
  }


  login(response: LoginModel){
    let loggedInUser = JSON.parse(localStorage.getItem('currentUser'))
    this.auth.login(response.userName,response.password)
    .subscribe(
        data => {
          // this.route.navigate(['homepage'],{ queryParams: { role: loggedInUser.role } })
          if(loggedInUser.role === 'ADMIN'){
            this.route.navigate(['homepage/admin'])
          }
          if(loggedInUser.role === 'USER'){
            this.route.navigate(['attendance',loggedInUser.employeeId],{ queryParams: { user_name: loggedInUser.username } })
          }
            console.log(data);
        })
  }

  goToRegister() {
    this.route.navigateByUrl('register')
  }
}
