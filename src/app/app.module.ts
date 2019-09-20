import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'

// import { AngularFireModule } from '@angular/fire';
// import { AngularFireAuthModule } from '@angular/fire/auth';
// import { environment } from '../environments/environment';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';


import { MaterialModule } from './material.module';

import { DataService } from './services/dataservice.service';

import { GlobalheaderModule } from './components/globalheader/globalheader.module';
import { LoginModule } from './components/login/login.module';
import { EncryptpasswordService } from './services/encryptpassword.service';
import { RegisterModule } from './components/register/register.module';
import { AttendanceModule } from './components/attendance/attendance.module';
import { HomepageModule } from './components/homepage/homepage.module';
import { JwtInterceptor, ErrorInterceptor, fakeBackendProvider } from './_helpers';
import { EmployeeManagementModule } from './components/employee-management/employee-management.module';
import { AttendancelistModule } from './components/attendancelist/attendancelist.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    GlobalheaderModule,
    LoginModule,
    RegisterModule,
    AttendancelistModule,
    
    HomepageModule,
    AttendanceModule,
    EmployeeManagementModule,
 
    // AngularFireModule.initializeApp(environment.firebaseConfig),
    // AngularFireAuthModule,
    HttpClientModule,
    MaterialModule,
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [
    DataService,
    EncryptpasswordService,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
        { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

        // provider used to create fake backend
        fakeBackendProvider
  ],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
