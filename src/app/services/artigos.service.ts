import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable()
export class ArtigosService {

  url = 'http://localhost:3000/artigo';

  constructor(
    private http: HttpClient
  ) { }

  getAllArtigos() {
    return this.http.get(this.url);
  }

  getArtigosByCategoria(categoria) {
    return this.http.get(this.url + '?categoria=' + categoria);
  }

  find(id: number) {
    return this.http.get(`${this.url}/${id}`);
  }

  save(data: any) {
    return !data.id ? this.http.post(this.url, data) : this.http.put(`${this.url}/${data.id}`, data) ;
  }

  saveComentario(idArtigo: number, data: any) {
    return this.http.post(this.url + '/' + idArtigo, data)
  }

  sizeReturn(obj) {
    var size = 0;
    for (let i = 0; i < obj.length; i++) {
     size++
    }
    return size;
  }

}
