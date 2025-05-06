import { Contacto } from "../model/contactos";

export class AgendaService {

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
