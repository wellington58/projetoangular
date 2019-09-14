import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUsuarioComponent } from './pages/add-usuario/add-usuario.component';
import { AddEventoComponent } from './pages/add-evento/add-evento.component';


const routes: Routes = [
  {path:"addusuario", component:AddUsuarioComponent},
  {path:"addevento", component:AddEventoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
