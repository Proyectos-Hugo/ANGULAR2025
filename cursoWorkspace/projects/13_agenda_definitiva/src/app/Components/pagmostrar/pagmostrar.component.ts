import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClientesService } from '../../Service/clientes.service';
import { Clientes } from '../../model/clientes';

@Component({
  selector: 'app-pagmostrar',
  imports: [FormsModule,CommonModule],
  templateUrl: './pagmostrar.component.html',
  styleUrl: './pagmostrar.component.css'
})
export class PagmostrarComponent {

  constructor (private usuClientes:ClientesService){

  }

  registro:Clientes[];

  ngOnInit() {
    this.registro = this.usuClientes.registro; // Asignar el array del servicio al componente
  }
  
  eliminar(c){
    this.usuClientes.eliminar(c)
  }
}
