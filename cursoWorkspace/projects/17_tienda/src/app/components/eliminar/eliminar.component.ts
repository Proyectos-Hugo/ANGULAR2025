import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TiendaService } from '../../service/tienda.service';
import { Productos } from '../../model/productos';

@Component({
  selector: 'app-eliminar',
  imports: [FormsModule, CommonModule],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent {

  id:string;

  constructor(private store:TiendaService){}

  eliminar(){
    this.store.eliminar(this.id).subscribe();
  }
}

