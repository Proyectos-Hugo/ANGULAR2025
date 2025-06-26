import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'notas'
})
export class NotasPipe implements PipeTransform {

  transform(value: any): string {
    let res:string="desconocido";
    if(value<5){
      res="suspenso";
    }else if(value=5){
      res="suficiente";
    }else if(value=6){
      res="Bien";
    }else if(value>=7&&value<=8){
      res="Notable";
    }else if(value>=9&&value<=10){
      res="Sobresaliente";
    }
    return res;
  }
}
