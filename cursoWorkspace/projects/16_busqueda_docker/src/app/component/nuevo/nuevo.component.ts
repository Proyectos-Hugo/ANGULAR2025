import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BusqueService } from '../../service/busque.service';

@Component({
  selector: 'app-nuevo',
  imports: [FormsModule,CommonModule],
  templateUrl: './nuevo.component.html',
  styleUrl: './nuevo.component.css'
})
export class NuevoComponent {

  tematica:string;
  url:string;
  descripcion:string;
  resultado:string;
  itemAlta:Item;

  constructor(private buscarService: BusqueService){}

  guardar():void{
    const libro = new this.itemAlta(this.url,this.tematica,this.descripcion);
    this.buscarService.nuevaTematica(libro).subscribe(res => this.resultado =res);
  }
}
