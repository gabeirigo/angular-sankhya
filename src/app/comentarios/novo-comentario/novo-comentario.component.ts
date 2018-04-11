import { Router, ActivatedRoute } from '@angular/router';
import { ArtigosService } from './../../services/artigos.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-novo-comentario',
  templateUrl: './novo-comentario.component.html',
  styleUrls: ['./novo-comentario.component.css']
})
export class NovoComentarioComponent implements OnInit {

  artigoId = null;
  comentarios:  {
    id: null,
    autor: '',
    texto: ''
  }


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
          .subscribe(data => this.artigoId = +params['id']);
      }
    });
  }

  saveComentario() {
    this.artigoService.saveComentario(this.artigoId, this.comentarios)
      .subscribe(() => {
        //this.messageService.message = "Artigo salvo com sucesso";
        location.reload();
      });
  }

}
