import { Component } from '@angular/core';
import { Contacto } from '../model/contacto';

@Component({
  selector: 'app-agendajson',
  imports: [],
  templateUrl: './agendajson.component.html',
  styleUrl: './agendajson.component.css'
})
export class AgendajsonComponent {

  nombre:string;
  email:string;
  telefono:string;
  Agenda: Contacto[]=[];
  visible:boolean=false;

  guardar():void {
    let contacto = new Contacto();
    contacto.nombre = this.nombre;
    contacto.telefono = this.telefono;
    contacto.email = this.email;
    this.Agenda.push(contacto);
  }
}
