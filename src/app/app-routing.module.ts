import { SendComponent } from './send/send.component';
import { LoginComponent } from './login/login.component';
import { ListEnvoyeesComponent } from './list-envoyees/list-envoyees.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListRecuComponent } from './list-recu/list-recu.component';

const routes: Routes = [
  {path:"recus",component:ListRecuComponent},
  {path:"envoyes",component:ListEnvoyeesComponent},
  {path:"send",component:SendComponent},
  {path:"login",component:LoginComponent},
  {path:"",component:LoginComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
