import { Contacto } from "../model/contactos";

export class AgendaService {

    nombre: string;
    email: string;
    telefono: string;
    agenda: Contacto[]=[];

    visible:boolean=false;
    
    guardar():void{
      //creamos un objeto con los datos del contacto
      let c=new Contacto();
      c.nombre=this.nombre;
      c.email=this.email;
      c.telefono=this.telefono;

      //añadimos el contacto al array
      this.agenda.push(c);
    }
    mostrar():void{
      this.visible=!this.visible;
    }

    eliminar(c):void{
      let index= this.agenda.indexOf(c);
      this.agenda.splice(index,1);
    }
}
