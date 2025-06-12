import { Component } from '@angular/core';
import { Producto } from '../../app/model/producto';
import { TiendaService } from '../../app/service/tienda.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  imports: [FormsModule,CommonModule],
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent {

  productos:Producto[];
  constructor(private tiendaService:TiendaService){}

  mostrar(){
    this.tiendaService.productos().subscribe(data=>this.productos=data);
  }
}
