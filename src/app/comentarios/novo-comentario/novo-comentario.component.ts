import { MessageService } from './../../services/message.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ArtigosService } from './../../services/artigos.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-novo-comentario',
  templateUrl: './novo-comentario.component.html',
  styleUrls: ['./novo-comentario.component.css']
})
export class NovoComentarioComponent implements OnInit {

  artigo: any;

  comentario = {
    id: null,
    autor: '',
    texto: ''
  }

  message = null;
  colorMessage = null;

  constructor(
    private artigoService: ArtigosService,
    private messageService: MessageService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.route.params.subscribe(params => {
      if (params.hasOwnProperty('id')) {
        this.getArtigo(+params['id']);
      }
    });
  }

  getArtigo(id) {
    this.artigoService.find(id)
      .subscribe(data => this.artigo = data);
  }

  saveComentario() {

    this.artigo.comentarios.push(this.comentario);

    this.artigoService.save(this.artigo)
      .subscribe(() => {
        this.message = "Comentário enviado!";
        this.colorMessage = "success";

        setTimeout(() => {
          location.reload();
        }, 1800);
      });
  }


}
