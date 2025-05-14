import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BusqueService } from '../../service/busque.service';

@Component({
  selector: 'app-buscar',
  imports: [FormsModule,CommonModule],
  templateUrl: './buscar.component.html',
  styleUrl: './buscar.component.css'
})
export class BuscarComponent {

  tematica:string;
  resultado:string;
  visible:boolean=false;

  constructor(private buscarService: BusqueService){}

  buscar(){
    this.visible =!this.visible;
    this.buscarService.buscarTematica(this.tematica).subscribe(res => {
      this.resultado = res;
    });
  }
}

