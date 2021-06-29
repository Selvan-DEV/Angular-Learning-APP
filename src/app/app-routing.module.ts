import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpListComponent } from './Components/emp-list/emp-list.component';
import { EmpRegisterComponent } from './Components/emp-register/emp-register.component';
import { MemberComponent } from './dynamic-components/member/member.component';


const routes: Routes = [
  { path: 'emp-register', component: EmpRegisterComponent },
  { path: 'emp-list', component: EmpListComponent },
  { path: 'member', component: MemberComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
