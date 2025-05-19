export class Productos {
  codigo:string;
  denominacion:string;
  precio:number;
  idCategoria:number;
  id:string;

  constructor(cod?:string, deno?:string, pre?:number, idCat?:number, id?:string){
    this.codigo=cod;
    this.denominacion=deno;
    this.precio=pre;
    this.idCategoria=idCat;
    this.id=id;
  }

}
