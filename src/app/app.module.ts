import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PageNavComponent } from './pages/page-nav/page-nav.component';
import { AddUsuarioComponent } from './pages/add-usuario/add-usuario.component';
import { ListUsuarioComponent } from './pages/list-usuario/list-usuario.component';
import { AddEventoComponent } from './pages/add-evento/add-evento.component';
import { ListEventoComponent } from './pages/list-evento/list-evento.component';
import { EnderecoComponent } from './pages/endereco/endereco.component';
import { PerfilComponent } from './pages/perfil/perfil.component';
import { CardComponent } from './pages/card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    PageNavComponent,
    AddUsuarioComponent,
    ListUsuarioComponent,
    AddEventoComponent,
    ListEventoComponent,
    EnderecoComponent,
    PerfilComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
