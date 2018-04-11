import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ArtigosService } from './services/artigos.service';
import { Routes, RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ListaArtigosComponent } from './artigos/lista-artigos/lista-artigos.component';
import { NovoArtigoComponent } from './artigos/novo-artigo/novo-artigo.component';
import { NovoComentarioComponent } from './comentarios/novo-comentario/novo-comentario.component';
import { ListaComentariosComponent } from './comentarios/lista-comentarios/lista-comentarios.component';
import { MessageService } from './services/message.service';

import { TableModule } from 'primeng/table';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { DropdownModule } from 'primeng/dropdown';
import {EditorModule} from 'primeng/editor';
import {DataTableModule} from 'primeng/datatable';

import { HeaderComponent } from './header/header.component';
import { ButtonComponent } from './bootstrap/button/button.component';
import { IconsComponent } from './bootstrap/icons/icons.component';
import { ListaCategoria } from './artigos/novo-artigo/lista-categorias';
import { FiltroArtigosComponent } from './artigos/filtro-artigos/filtro-artigos.component';
import { ListaArtigosPipe } from './artigos/lista-artigos/lista-artigos-titulo.pipe';
import { VerArtigoComponent } from './artigos/ver-artigo/ver-artigo.component';
import { ListaArtigosAutorPipe } from './artigos/lista-artigos/lista-artigos-autor.pipe';
import { AlertComponent } from './bootstrap/alert/alert.component';

const ROUTES: Routes = [
  { path: '', component: ListaArtigosComponent },
  { path: 'artigos', component: ListaArtigosComponent },
  { path: 'artigo/novo', component: NovoArtigoComponent },
  { path: 'artigo/:id/editar', component: NovoArtigoComponent },
  { path: 'artigo/:id', component: VerArtigoComponent }
]

@NgModule({
  declarations: [
    AppComponent,
    ListaArtigosComponent,
    NovoArtigoComponent,
    ListaComentariosComponent,
    NovoComentarioComponent,
    HeaderComponent,
    ButtonComponent,
    IconsComponent,
    FiltroArtigosComponent,
    ListaArtigosPipe,
    VerArtigoComponent,
    ListaArtigosAutorPipe,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,

    // IMPORTS PRIMENG
    TableModule,
    InputTextModule,
    InputTextareaModule,
    DropdownModule,
    EditorModule,
    DataTableModule
  ],
  providers: [
    ArtigosService,
    ListaCategoria,
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
