import { Injectable } from '@angular/core';
import { Usuario } from '../model/usuario';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

private db = environment.serverAPI

  constructor(
    protected Http:HttpClient
  ) { }

  save(usuario:Usuario){
   return this.Http.post(this.db+"usuarios",usuario)
  }

  getAll(){
    return this.Http.get(this.db + "usuarios")
  }
}
