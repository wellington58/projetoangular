import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Evento } from '../model/evento';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppEventoService {

  private db = environment.serverAPI

  constructor(
    protected http:HttpClient
  ) { }

  save(evento:Evento){
   return this.http.post(this.db+"eventos",evento)
  }

  getAll(){
    return this.http.get(this.db + "eventos")
  }
}
