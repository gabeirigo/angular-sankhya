import { MessageService } from './../../services/message.service';
import { ArtigosService } from './../../services/artigos.service';
import { ListaArtigosPipe } from './lista-artigos-titulo.pipe';

import { Component, OnInit } from '@angular/core';
import { Route, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-lista-artigos',
  templateUrl: './lista-artigos.component.html',
  styleUrls: ['./lista-artigos.component.css']
})
export class ListaArtigosComponent implements OnInit {

  artigos: any;
  categoria: string;

  artigosPorTitulo: any;
  filtroTitulo: string;
  filtroAutor: string;
  tipoFiltro = "";

  message: null;
  colorMessage: null;

  constructor(
    private artigosService: ArtigosService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.queryParams.subscribe(param => {
      if (param['categoria']) {
        this.categoria = param['categoria']
        this.getArtigosByCategoria(this.categoria)
        this.tipoFiltro = "categoria";
        return;
      }

      if (param['qTitulo']) {
        this.filtroTitulo = param['qTitulo']
        this.listaArtigos();
        this.tipoFiltro = "titulo"
        return;
      }

      if (param['qAutor']) {
        this.filtroTitulo = param['qAutor']
        this.listaArtigos();
        this.tipoFiltro = "autor"
        return;
      }

      this.listaArtigos();

    });

  }

  listaArtigos() {
    this.artigosService.getAllArtigos().subscribe(
      artigos => {
        this.artigos = artigos;
      }
    )
  }

  getArtigosByCategoria(categoria) {
    this.artigosService.getArtigosByCategoria(categoria).subscribe(
      artigos => {
        this.artigos = artigos;
      }
    )
  }

}
