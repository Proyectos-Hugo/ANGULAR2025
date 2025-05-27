export class Movimietos {
   idMovimiento:number;
   idCuenta:number;
   fecha:Date;
   cantidad:number;
   operacion:string;

   constructor(idMov?:number, idCue?:number, fech?:Date, cant?:number, oper?:string){
    this.idMovimiento = idMov;
    this.idCuenta = idCue;
    this.fecha = fech;
    this.cantidad = cant;
    this.operacion = oper;
   }
}
