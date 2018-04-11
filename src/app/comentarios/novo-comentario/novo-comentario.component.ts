import { MessageService } from './../../services/message.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ArtigosService } from './../../services/artigos.service';
import { Component, OnInit, Input } from '@angular/core';
import { MockNgModuleResolver } from '@angular/compiler/testing';

@Component({
  selector: 'app-novo-comentario',
  templateUrl: './novo-comentario.component.html',
  styleUrls: ['./novo-comentario.component.css']
})
export class NovoComentarioComponent implements OnInit {

  artigo: any

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
      .subscribe((data) => {
        if (!data['comentarios']) {
          data['comentarios'] = [];
        }
        this.artigo = data
      });
  }

  saveComentario() {

    let tamanhoComentarios = this.artigoService.sizeReturn(this.artigo.comentarios)

    // VERIFICA SE EXISTE ITENS EM COMENTÁRIOS
    if (tamanhoComentarios === 0) {
      this.comentario['id'] = 1;
      return;
    }

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
