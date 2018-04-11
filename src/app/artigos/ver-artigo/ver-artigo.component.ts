import { Component, OnInit } from '@angular/core';
import { ArtigosService } from '../../services/artigos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-ver-artigo',
  templateUrl: './ver-artigo.component.html',
  styleUrls: ['./ver-artigo.component.css']
})
export class VerArtigoComponent implements OnInit {

  artigo: any = {
    id: null,
    titulo: '',
    autor: '',
    conteudo: '',
    categoria: ''
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
