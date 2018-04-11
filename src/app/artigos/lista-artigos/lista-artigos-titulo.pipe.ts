import { ActivatedRoute } from '@angular/router';
import { Artigos } from './../../models/artigos';
import { Pipe, PipeTransform, Injectable } from '@angular/core';

@Pipe({
  name: 'filtroTitulo'
})

@Injectable()
export class ListaArtigosPipe implements PipeTransform {
  constructor(private route: ActivatedRoute) { }

  transform(artigos: any[], searchText: string): any[] {

    this.route.queryParams.subscribe(param => {
      if(param['qTitulo']) {
        searchText = param['qTitulo'];
        searchText = searchText.toLowerCase();
      }
    })

    let arr = [];
    for (let key in artigos) {
      if (artigos.hasOwnProperty(key)) {
        arr.push(artigos[key]);
      }
    }

    return arr.filter(it => {
      return it['titulo'].toLowerCase().includes(searchText);
    });

  }

}



