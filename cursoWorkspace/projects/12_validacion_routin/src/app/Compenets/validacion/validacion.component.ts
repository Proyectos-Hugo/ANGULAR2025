import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../../Service/clientes.service';

@Component({
  selector: 'app-validacion',
  imports: [FormsModule,CommonModule],
  templateUrl: './validacion.component.html',
  styleUrl: './validacion.component.css'
})
export class ValidacionComponent {

  usuario:string;
  contra:string;
  resultado:string;
  respuesta: string;

  constructor(private usuarioServices:ClientesService){

  }

  validar(){
    this.respuesta = this.usuarioServices.iniciarSesion(this.usuario,this.contra);
    this.resultado = this.respuesta;
  }

}
