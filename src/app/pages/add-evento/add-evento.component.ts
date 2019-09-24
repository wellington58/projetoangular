import { Component, OnInit } from '@angular/core';
import { Evento } from '../../model/evento';
import { AppEventoService } from '../../services/evento.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-evento',
  templateUrl: './add-evento.component.html',
  styleUrls: ['./add-evento.component.css']
})
export class AddEventoComponent implements OnInit {

  protected evento: Evento = new Evento;
  protected id: string = null;

  constructor(
    protected eventoService: AppEventoService,
    private router: Router,
    protected ativedRouter: ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.ativedRouter.snapshot.paramMap.get("id");
    if (this.id) {
      this.eventoService.get(this.id).subscribe(
        res => {
          this.evento = res;
        },
        error => this.id = null
      )
    }
  }

  onsubmit(form) {
    console.log(this.evento);
    if (this.id) {
      this.eventoService.update(this.evento, this.id)
        .subscribe(
          res => {
            console.log("atualizado com sucesso!", res);
            form.reset();
            //this.router.navigate(["/"])
            alert("atualizado com sucesso!");
            this.router.navigateByUrl('/', { skipLocationChange: true })
              .then(() =>
                this.router.navigate(['/addevento']));
            //this.router.navigate(["addusuario"])
          },
          error => {
            console.log("nao atualizado! ", error);
            alert("nao atualizado! ");
          }
        )
    }
    else {
      this.eventoService.save(this.evento)
        .subscribe(
          res => {
            console.log("cadastrado com sucesso!", res);
            form.reset();
            //this.router.navigate(["/"])
            alert("cadastrado com sucesso!")
            this.router.navigateByUrl('/', { skipLocationChange: true })
              .then(() =>
                this.router.navigate(['/addevento']));
            //this.router.navigate(["addusuario"]) 
          },
          error => {
            console.log("não cadastrado", error);
            alert("não cadastrado! ");

          }
        )
    }
  }
}
