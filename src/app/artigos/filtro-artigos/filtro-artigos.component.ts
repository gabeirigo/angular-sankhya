import { ActivatedRoute } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';
import { SelectItem } from 'primeng/api';
import { ArtigosService } from '../../services/artigos.service';

@Component({
  selector: 'app-filtro-artigos',
  templateUrl: './filtro-artigos.component.html',
  styleUrls: ['./filtro-artigos.component.css']
})
export class FiltroArtigosComponent implements OnInit {

  categorias: SelectItem[];
  selecionaFiltro: string = "categoria";

  @Input()
  filtroTitulo: string

  @Input()
  filtroAutor: string

  constructor(
    private artigosService: ArtigosService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {

    this.categorias = [
      { value: "FINANCEIRO", label: "Financeiro" },
      { value: "COMERCIAL", label: "Comercial" },
      { value: "RH", label: "RH" },
      { value: "JURIDICO", label: "Jurídico" },
      { value: "DESENVOLVIMENTO", label: "Desenvolvimento" }
    ]

  }

}
