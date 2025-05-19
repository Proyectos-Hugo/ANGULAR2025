export class Busqueda {
  tematica:string;
  url:string;
  descripcion:string;

  constructor(tematica:string, url:string, descripcion:string){
    this.tematica = tematica;
    this.url=url;
    this.descripcion=descripcion;
  }
}
