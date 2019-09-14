import { Component, OnInit } from '@angular/core';
import { Evento } from '../../model/evento';
import { AppEventoService } from '../../services/evento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.component.html',
  styleUrls: ['./add-evento.component.css']
})
export class AddEventoComponent implements OnInit {

  protected evento:Evento = new Evento;

  constructor(
    protected eventoService: AppEventoService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onsubmit(form){
    console.log(this.evento);
    this.eventoService.save(this.evento)
    .subscribe(
      res=>{
        console.log("cadastrado com sucesso!",res);
        form.reset();
        //this.router.navigate(["/"])
        alert("cadastrado com sucesso!")
        this.router.navigateByUrl('/', { skipLocationChange: true})
        .then(() =>
          this.router.navigate(['/addevento']));
          //this.router.navigate(["addusuario"]) 
      },
      error=>{
        console.log("não cadastrado", error);
        alert("não cadastrado! ");
        
      }

    )
    
  }



}
