import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SendComponent } from './send/send.component';
import { ListRecuComponent } from './list-recu/list-recu.component';
import { ListEnvoyeesComponent } from './list-envoyees/list-envoyees.component';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http'
import { GestionService } from './gestion.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SendComponent,
    ListRecuComponent,
    ListEnvoyeesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [GestionService],
  bootstrap: [AppComponent]
})
export class AppModule { }
