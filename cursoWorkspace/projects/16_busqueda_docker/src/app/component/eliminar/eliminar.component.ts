import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BusqueService } from '../../service/busque.service';

@Component({
  selector: 'app-eliminar',
  imports: [FormsModule,CommonModule],
  templateUrl: './eliminar.component.html',
  styleUrl: './eliminar.component.css'
})
export class EliminarComponent {

  tematica:string;
  resultado:string;

  constructor(private buscarService: BusqueService){}

  eliminar(){

  }
}
