import { ListaCategoria } from './lista-categorias';
import { Component, OnInit } from '@angular/core';
import { ArtigosService } from '../../services/artigos.service';
import { Router, ActivatedRoute } from '@angular/router';
import {SelectItem} from 'primeng/api';

@Component({
  selector: 'app-novo-artigo',
  templateUrl: './novo-artigo.component.html',
  styleUrls: ['./novo-artigo.component.css']
})
export class NovoArtigoComponent implements OnInit {


  artigo: any = {
    id: null,
    titulo: '',
    autor: '',
    conteudo: '',
    categoria: ''
  };

  message = null;
  colorMessage = null;

  categorias: SelectItem[];

  constructor(
    private artigoService: ArtigosService,
    private router: Router, // Serviço que lida com a navegação
    private route: ActivatedRoute,
    private listaCategorias: ListaCategoria
  ) { }

  ngOnInit() {

    this.categorias = [
      { value: "FINANCEIRO", label: "Financeiro" },
      { value: "COMERCIAL", label: "Comercial" },
      { value: "RH", label: "RH" },
      { value: "JURIDICO", label: "Jurídico" },
      { value: "DESENVOLVIMENTO", label: "Desenvolvimento" }
    ]

    // Retorna os parâmetros em forma de objeto
    this.route.params.subscribe(params => {
      // Faz a verificação se existe dentro do objeto o parâmetro id
      // Se existir, passa o id como parametro para a função find() do ArtigoService
      if (params.hasOwnProperty('id')) {
        this.artigoService.find(+params['id'])
        .subscribe(data => this.artigo = data);
      }
    });

    this.artigo.categoria = this.listaCategorias;
  }

  save() {
    this.artigoService.save(this.artigo)
    .subscribe(() => {
        this.message = "Artigo salvo com sucesso";
        this.colorMessage = "success";

        setTimeout(() => {
          window.history.back();
        }, 1800);

      });
  }

}
