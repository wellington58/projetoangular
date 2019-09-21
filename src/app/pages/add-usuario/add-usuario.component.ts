import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../model/usuario';
import { UsuarioService } from '../../services/usuario.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {

  protected usuario:Usuario = new Usuario;
  protected id:string = null;

  constructor(
    protected usuarioService: UsuarioService,
    private router:Router,
    protected ativedRouter:ActivatedRoute
  ) { }

  ngOnInit() {
    this.id = this.ativedRouter.snapshot.paramMap.get("id");
    if(this.id){
      this.usuarioService.get(this.id).subscribe(
        res=>{
          this.usuario = res;
        },
        error => this.id = null
      )
    }
  }

  onsubmit(form){
    console.log(this.usuario);
    if(this.id){
      this.usuarioService.update(this.usuario,this.id)
      .subscribe(
        res=>{
          console.log("atualizado com sucesso!",res);
          form.reset();
          //this.router.navigate(["/"])
          alert("atualizado com sucesso!");   
          this.router.navigateByUrl('/', { skipLocationChange: true })
          .then(() => 
            this.router.navigate(['/addusuario']));
          //this.router.navigate(["addusuario"])
        },
        error=>{
          console.log("nao atualizado! ",error);
          alert("nao atualizado! ");
          
        }
      )
    }
    else{
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
}