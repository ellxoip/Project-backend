import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, Validators } from '@angular/forms';
import { Usuario } from '../modReg/usuario';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.scss'],
})
export class RegistroComponent implements OnInit {

  public form = new FormBuilder;

  public formulario? : any;

  private usuario? : Usuario;

  @Output()
  private enviarUsuario = new EventEmitter<Usuario>();

  @Output()
  private hola = new EventEmitter();

  constructor(
  ) { }

  ngOnInit() {
    this.formulario = this.form.group({
      firstName : new FormControl('', [Validators.required, Validators.minLength(1), Validators.maxLength(15)]),
      lastName : new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(20)]),
      age : new FormControl(0, [Validators.required, Validators.min(18), Validators.max(98)]),
      username : new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(10)]),
      password : new FormControl('', [Validators.required, Validators.minLength(8), Validators.maxLength(16)]),
      birthDate : new FormControl('01-01-1992', Validators.required ),
      gender : new FormControl('male', Validators.required)
    });
  }

  public enviar() : void{
    const nuevo = this.formulario.value;
    this.usuario = {
      firstName: nuevo.firstName,
      lastName: nuevo.lastName,
      age: nuevo.age,
      username : nuevo.username,
      password : nuevo.password,
      birthDate : Date.parse(nuevo.birthDate),
      gender : nuevo.gender
    }
    this.enviarUsuario.emit(this.usuario);
  }

  public loginMode(){
    this.hola.emit();
  }


}
