import { Injectable } from '@angular/core';
import { Contacto } from '../model/contactos';

@Injectable({
  providedIn: 'root'
})
export class AgendaService {

  constructor() { }

  agenda:Contacto[]=[];
      guardar(contacto:Contacto):void{
        this.agenda.push(contacto);
      }

      mostrar():Contacto[]{
        return this.agenda;
      }

      eliminar(c):void{
        let index= this.agenda.indexOf(c);
        this.agenda.splice(index,1);
      }
}
