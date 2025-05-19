import { Data } from './../../../../../../../node_modules/json-server/lib/service.d';
import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';
import { TiendaService } from '../../service/tienda.service';
import { Categoria } from '../../model/categoria';
import { Productos } from '../../model/productos';

@Component({
  selector: 'app-busqueda',
  imports: [FormsModule,CommonModule],
  templateUrl: './busqueda.component.html',
  styleUrl: './busqueda.component.css'
})
export class BusquedaComponent {

  idCategoria:number;
  categorias:Categoria[];
  producto:Productos[];
  resultado;

  constructor(private store:TiendaService){
    this.store.categoria().subscribe(data => this.categorias=data);
  }

  buscar() {
    this.store.devolverProducto(this.idCategoria).subscribe((data) => {
      this.producto = data;
      this.resultado = data; // Mensaje informativo
    });
  }
}
