export class Curso{
  idCurso: number;
  nombre: string;
  duracion: number;
  fechaInicio: Date;
  precio: number;

  constructor(cod?:number, nom?:string, dura?:number, fech?:Date, pre?:number){
    this.idCurso=cod;
    this.nombre=nom;
    this.duracion=dura;
    this.fechaInicio=fech;
    this.precio=pre;
  }
}
