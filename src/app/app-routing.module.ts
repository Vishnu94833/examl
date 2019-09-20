import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GlobalHeaderService } from './services/globalheader.service';


const routes: Routes = [

    GlobalHeaderService.childRoutes([
      {
        path: 'login',
        loadChildren: 'app/components/login/login.module#LoginModule'
      },
      {
        path: 'register',
        loadChildren: 'app/components/register/register.module#RegisterModule'
      },
     
      {
        path: 'attendance',
        loadChildren: 'app/components/attendance/attendance.module#AttendanceModule'
      },
      
      {
        path: 'employee/:id',
        loadChildren: 'app/components/employee-management/employee-management.module#EmployeeManagementModule'
      },
      {
        path: 'homepage',
        loadChildren: 'app/components/homepage/homepage.module#HomepageModule'
      },
      // Fallback when no prior route is matched
      { path: '', redirectTo: '/login', pathMatch: 'full' }
  ])

  // { path: 'customers', component: ChildComponent },
  // { path: 'customer', 
  // children: [
  //   { path: 'add', component: ParentComponent, data: { type: 'addMode' } },
  //   { path: 'edit/:id', component: ParentComponent, data: { type: 'editMode' } },
  //   { path: 'delete/:id', component: ParentComponent, data: { type: 'readOnlyMode' } }
  // ] },
  // { path: '**', component: ChildComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
