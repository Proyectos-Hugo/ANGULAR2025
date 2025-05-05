import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AgendaService } from '../Service/agendaService';
import { Contacto } from '../model/contactos';

@Component({
  selector: 'app-agenser',
  imports: [FormsModule,CommonModule],
  templateUrl: './agenser.component.html',
  styleUrl: './agenser.component.css'
})
export class AgenserComponent {
  nombre: string;
  email: string;
  telefono: string;
  agenda: Contacto[]=[];
  agenSevice:AgendaService=new AgendaService();

  visible:boolean=false;

  guardar():void{
    this.agenda.push(new Contacto(this.nombre,this.telefono,this.email));
  }
  mostrar():void{
    this.visible=!this.visible;
  }

  eliminar(c):void{

  }
}
