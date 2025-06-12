export class Producto{
  codigoProducto:number;
  producto:string;
  precioUnitario:number;
  stock:number;

  constructor(codPro?:number, pro?:string, preUni?:number, sto?:number){
    this.codigoProducto=codPro;
    this.producto=pro;
    this.precioUnitario=preUni;
    this.stock=sto;
  }
}

