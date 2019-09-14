import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  protected usuario:Usuario = new Usuario;

  constructor(
    protected usuarioService: UsuarioService,
    private router:Router
  ) { }

  ngOnInit() {
  }

  onsubmit(form){
    console.log(this.usuario);
    this.usuarioService.save(this.usuario)
    .subscribe(
      res=>{
        console.log("cadastrado com sucesso!",res);
        form.reset();
        //this.router.navigate(["/"])
        alert("cadastrado com sucesso!");   
        this.router.navigateByUrl('/', { skipLocationChange: true })
        .then(() => 
          this.router.navigate(['/addusuario']));
        //this.router.navigate(["addusuario"])
      },
      error=>{
        console.log("nao cadastrado! ",error);
        alert("nao cadastrado! ");
        
      }
    )
  }
}
