import { Component, OnInit, Input } from '@angular/core';
import { Endereco } from '../../model/endereco';
import { EnderecoService } from '../../services/endereco.service';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

 @Input( ) protected endereco: Endereco = new Endereco;
  constructor(
    protected enderecoService: EnderecoService
  ) { }

  ngOnInit() {
  }

  protected cep: string;

  buscaCep() {
    if (this.cep.length > 7) {
      this.enderecoService.getEndereco(this.cep).subscribe(
        res => {
          if (res.error) {
            alert("CEP não encontrado")
          } else {

            console.log(res);
            this.endereco = res
          }
        }
      )
    }
  }
}
