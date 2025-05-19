import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TiendaService } from '../../service/tienda.service';
import { Productos } from '../../model/productos';

@Component({
  selector: 'app-alta',
  imports: [FormsModule,CommonModule],
  templateUrl: './alta.component.html',
  styleUrl: './alta.component.css'
})
export class AltaComponent {

  producto:Productos= new Productos();

  constructor(private store:TiendaService){}

  darAlta(){
    this.store.alta(this.producto).subscribe();
  }
}
