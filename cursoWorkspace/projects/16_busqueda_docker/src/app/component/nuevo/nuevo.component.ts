import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BusqueService } from '../../service/busque.service';
import { Item } from '../../model/Item';

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
  itemAlta:Item[];

  constructor(private buscarService: BusqueService){}

  guardar():void{
    const item = new Item(this.url,this.tematica,this.descripcion);
    this.buscarService.nuevaTematica(item)
    .subscribe();
  }
}
