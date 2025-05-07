import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../../Service/clientes.service';

@Component({
  selector: 'app-pagbuscar',
  imports: [FormsModule, CommonModule],
  templateUrl: './pagbuscar.component.html',
  styleUrl: './pagbuscar.component.css'
})
export class PagbuscarComponent {

  email:string;
  resultado:string

  constructor(private usuClientes:ClientesService){

  }

  buscar(){
    this.resultado= this.usuClientes.buscar(this.email);
  }
}
