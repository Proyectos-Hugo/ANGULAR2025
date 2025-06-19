import { LibreriaService } from './../../Service/libreria.service';
import { Component } from '@angular/core';
import { Compra } from '../../model/compra';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-compras',
  imports: [CommonModule],
  templateUrl: './compras.component.html',
  styleUrl: './compras.component.css'
})
export class ComprasComponent {
  compras:Compra[];
  constructor(libreriaService:LibreriaService){
    libreriaService.compras().subscribe(data=>this.compras=data);
  }
}
