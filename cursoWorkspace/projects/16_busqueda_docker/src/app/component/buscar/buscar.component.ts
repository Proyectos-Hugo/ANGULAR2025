import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BusqueService } from '../../service/busque.service';
import { Item } from '../../model/Item';


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
  items:Item[];

  constructor(private buscarService: BusqueService){}

    buscar():void{
      this.buscarService.buscarTematica(this.tematica)
      .subscribe(resultado=>this.items=resultado);
    }
}

