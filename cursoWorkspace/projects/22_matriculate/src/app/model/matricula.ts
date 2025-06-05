export class Matricula {

  usuario:string;
  alumno:string;
  curso:string;
  nota:number;
  email: any;
nombre: any;

  constructor(usu:string, alu:string, curs:string, not:number ){
    this.usuario=usu;
    this.alumno= alu;
    this.curso=curs;
    this.nota=not;
  }
}
