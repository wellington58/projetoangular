import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUsuarioComponent } from './pages/add-usuario/add-usuario.component';
import { AddEventoComponent } from './pages/add-evento/add-evento.component';
import { PerfilComponent } from './pages/perfil/perfil.component';


const routes: Routes = [
  {path:"addusuario", component:AddUsuarioComponent},
  {path:"addusuario/:id", component:AddUsuarioComponent},
  {path:"addevento", component:AddEventoComponent},
  {path:"addevento/:id", component:AddEventoComponent},
  {path:"perfil/:id", component:PerfilComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
