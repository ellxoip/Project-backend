import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {

  private acceso = {
    username : '',
    password : ''
  }

  public formulario?:any;

  public fb = new FormBuilder;

  @Output()
  private ingresar = new EventEmitter<any>();

  @Output()
  private soyNuevo = new EventEmitter();

  constructor(
  ) { }

  ngOnInit() {
    this.formulario = this.fb.group({
      username : new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
      password : new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)])
    });
  }

  public enter():void{
    const datos = this.formulario.value;
    this.acceso.username = datos.username;
    this.acceso.password = datos.password;
    this.ingresar.emit(this.acceso);
  }

  public regisform():void{
    this.soyNuevo.emit();
  }

}
