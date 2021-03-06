import { Component, OnInit } from '@angular/core';
import { AppEventoService } from '../../services/evento.service';

@Component({
  selector: 'app-list-evento',
  templateUrl: './list-evento.component.html',
  styleUrls: ['./list-evento.component.css']
})
export class ListEventoComponent implements OnInit {

  protected eventos:any;

  constructor(
    protected eventosService:AppEventoService
  ) { }

  ngOnInit() {
    this.eventos = this.eventosService.getAll();
  }

  apagar(evento){
    if(confirm("Apagar os dados do usuario: " + evento.nome + "?")){
      this.eventosService.delete(evento.id).subscribe(
        res=>{
          alert("Usuario apagado!")
        }
      )
    }
  }
}
