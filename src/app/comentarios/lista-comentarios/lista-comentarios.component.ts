import { ArtigosService } from './../../services/artigos.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-lista-comentarios',
  templateUrl: './lista-comentarios.component.html',
  styleUrls: ['./lista-comentarios.component.css']
})
export class ListaComentariosComponent implements OnInit {

  artigo: any = {
    id: null,
    comentarios: []
  };


  constructor(
    private artigoService: ArtigosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    // Retorna os parâmetros em forma de objeto
    this.route.params.subscribe(params => {
      // Faz a verificação se existe dentro do objeto o parâmetro id
      // Se existir, passa o id como parametro para a função find() do ArtigoService
      if (params.hasOwnProperty('id')) {
        this.artigoService.find(+params['id'])
          .subscribe(data => this.artigo = data);
      }
    });

  }
}
