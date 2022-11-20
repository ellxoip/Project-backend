import { Injectable } from '@angular/core';
import {HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import { Usuario } from '../modReg/usuario';

@Injectable({
  providedIn: 'root'
})
export class BuscarUserService {

  private info = {
    headers : {
      'Content-Type':'application/json'
    }
  }

  constructor(
    private http : HttpClient
  ) { }

  public buscarUser (username : string, password : string): Observable<any>{
    return this.http.post('https://dummyjson.com/auth/login', {"username":username, "password":password}, this.info);
  }
  public singupUsuario(usuario : Usuario): Observable<any>{
    return this.http.post('https://dummyjson.com/users/add', {...usuario}, this.info);
  }

}
