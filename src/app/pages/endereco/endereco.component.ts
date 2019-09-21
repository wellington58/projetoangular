import { Component, OnInit, Input } from '@angular/core';
import { EnderecoService } from 'src/app/services/endereco.service';
import { Endereco } from 'src/app/model/endereco';

@Component({
  selector: 'app-endereco',
  templateUrl: './endereco.component.html',
  styleUrls: ['./endereco.component.css']
})
export class EnderecoComponent implements OnInit {

  @Input() protected endereco: Endereco;

  constructor(
    private enderecoService: EnderecoService
  ) { }

  ngOnInit() {
  }

  protected cep: string;

  buscaCep() {
    if (this.cep.length > 7) {
      this.enderecoService.getEndereco(this.cep)
        .subscribe(
          res => {
            if (res.error) {
              alert("CEP não localizado!");
            } else {
              console.log(res);
              //this.endereco = res;
              this.endereco.cep = res.cep
              this.endereco.logradouro = res.logradouro
              this.endereco.localidade = res.localidade
              this.endereco.bairro = res.bairro
              this.endereco.uf = res.uf
            }
          }
        )
    }
  }
}