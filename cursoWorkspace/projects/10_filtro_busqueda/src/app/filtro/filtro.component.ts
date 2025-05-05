import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FiltroService } from '../Service/filtroService';
import { Pagina } from '../model/pagina';

@Component({
  selector: 'app-filtro',
  imports: [CommonModule,FormsModule],
  templateUrl: './filtro.component.html',
  styleUrl: './filtro.component.css'
})
export class FiltroComponent {

  temas:string;
  resultados:Pagina[];
  visible:boolean = false;
  filService:FiltroService;
  constructor(){
    this.filService = new FiltroService();
  }

  filtrar(){
    this.visible =!this.visible;
    this.resultados = this.filService.filtrar(this.temas);
  }

}
