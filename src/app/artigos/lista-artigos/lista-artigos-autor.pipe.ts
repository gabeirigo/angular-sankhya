import { Pipe, PipeTransform } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Pipe({
  name: 'filtroAutor'
})
export class ListaArtigosAutorPipe implements PipeTransform {

  constructor(private route: ActivatedRoute) { }

  transform(artigos: any[], searchText: string): any[] {

    this.route.queryParams.subscribe(param => {
      if(param['qAutor']) {
        searchText = param['qAutor'];
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
      return it['autor'].toLowerCase().includes(searchText);
    });

  }
}
