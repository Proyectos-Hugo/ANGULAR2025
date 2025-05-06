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
  resultado:string;

  guardar():void{
    let contacto = new Contacto(this.nombre,this.email,this.telefono);
    this.agenSevice.guardar(contacto);
  }
  mostrar():void{
    this.visible=!this.visible;
    this.agenda = this.agenSevice.mostrar();
    this.resultado = `${this.agenda}`;
  }

  eliminar(c):void{
    this.agenSevice.eliminar(c);
    this.agenda=this.agenSevice.mostrar();
  }
}
