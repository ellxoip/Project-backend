import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AutenticatePageRoutingModule } from './autenticate-routing.module';

import { AutenticatePage } from './autenticate.page';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegistroComponent } from './registro/registro.component';
import { BuscarUserService } from './servReg/buscarUser.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AutenticatePageRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule,
    ],

  declarations: [AutenticatePage,
    RegistroComponent,
    LoginComponent],
  providers: [
    BuscarUserService
  ]

})
export class AutenticatePageModule {}
