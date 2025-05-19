export class Categoria {
  idCategoria:number;
  nombre:string;
  proveedor:string;
  id:number;

  constructor(idCat:number, nom:string, prov:string, id:number){
    this.idCategoria=idCat;
    this.nombre=nom;
    this.proveedor=prov;
    this.id=id;
  }
}
