import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorpageComponent } from './errorpage/errorpage.component';
import { ListToDoComponent } from './list-to-do/list-to-do.component';
import { LoginComponent } from './login/login.component';
import { WelcomeComponent } from './welcome/welcome.component';


const routes: Routes = [
  {path:'',component: LoginComponent},
  {path:'login',component: LoginComponent},
  {path: 'welcome/:name',component: WelcomeComponent},
  {path:'ToDo',component: ListToDoComponent},
  {path:'**',component: ErrorpageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
