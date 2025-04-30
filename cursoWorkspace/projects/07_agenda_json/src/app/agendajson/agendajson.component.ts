import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Contacto } from '../model/contactos';

@Component({
  selector: 'app-agendajson',
  imports: [FormsModule, CommonModule],
  templateUrl: './agendajson.component.html',
  styleUrl: './agendajson.component.css'
})

export class AgendajsonComponent {
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
}
