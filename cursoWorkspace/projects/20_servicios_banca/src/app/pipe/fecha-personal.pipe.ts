import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'fechaPersonal'
})
export class FechaPersonalPipe implements PipeTransform {

  transform(value: any): string {
    const mifecha:Date=(value instanceof Date)?value:new Date(value);
    return `${mifecha.getDate()}/${mifecha.getMonth()+1}/${mifecha.getFullYear()}`;
  }

}
