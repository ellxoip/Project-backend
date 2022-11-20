import { Component, OnInit } from '@angular/core';
import {BuscarUserService} from './servReg/buscarUser.service';
import {Usuario} from './modReg/usuario';
import {Router} from '@angular/router';

@Component({
  selector: 'app-autenticate',
  templateUrl: './autenticate.page.html',
  styleUrls: ['./autenticate.page.scss'],
})
export class AutenticatePage implements OnInit {

  constructor(
    private datos : BuscarUserService,
    private ruta : Router
  ) { }

  private usuario? : Usuario;

  public modo? : number;

  ngOnInit() {
    this.modo = 1;
  }

  public cambiaModo(nuevo : number) : void{
    this.modo = nuevo;
  }

  public login(a1 : any){
    this.datos.buscarUser(a1.username, a1.password).subscribe(data => {
      this.ruta.navigateByUrl('/producto/'+data.id+'/'+data.token);
    });
  }
  public singupse(usr : Usuario) : void{
    this.datos.singupUsuario(usr).subscribe(data => {
      this.usuario = {...data}
      console.log('2 tacos de '+data.firstName+' a la orden!');
    });
    this.modo = 1;
  }

}
