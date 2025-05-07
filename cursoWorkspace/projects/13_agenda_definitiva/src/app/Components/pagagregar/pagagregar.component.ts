import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../../Service/clientes.service';
import { Clientes } from '../../model/clientes';

@Component({
  selector: 'app-pagagregar',
  imports: [FormsModule, CommonModule],
  templateUrl: './pagagregar.component.html',
  styleUrl: './pagagregar.component.css'
})
export class PagagregarComponent {

  nombre:string;
  email:string;
  telefono:string;
  resultado:string;

  constructor(private usucliente:ClientesService){

  }

  guardar(){
    let c = new Clientes(this.nombre,this.email,this.telefono);
    this.resultado = this.usucliente.guardar(c);
  }
}
