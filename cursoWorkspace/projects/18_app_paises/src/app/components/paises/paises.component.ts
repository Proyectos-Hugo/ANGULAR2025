import { Component } from '@angular/core';

import { PaisesService } from '../../service/paises.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pais } from '../../model/Pais';

@Component({
  selector: 'app-paises',
  imports: [CommonModule, FormsModule],
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent {
  continentes:string[];
  continenteSeleccionado:string;
  paisesContinente:Pais[];

  constructor(private paisesService:PaisesService){
    paisesService.continentes()
    .subscribe(resultado=>this.continentes=resultado);
  }

  cargarPaisesContienentes():void{
    this.paisesService.paisesContinente(this.continenteSeleccionado)
    .subscribe(resultado=>this.paisesContinente=resultado);
  }
}
