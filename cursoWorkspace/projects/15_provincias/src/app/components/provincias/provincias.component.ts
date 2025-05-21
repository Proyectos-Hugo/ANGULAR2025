import { Component } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Provincia } from '../../model/provincia';
import { Municipio } from '../../model/municipio';
import { PoblacionesService } from '../../service/provincias.service';

@Component({
  selector: 'app-poblaciones',
  imports: [FormsModule,CommonModule],
  templateUrl: './provincias.component.html',
  styleUrl: './provincias.component.css'
})
export class PoblacionesComponent {
  provincias:Provincia[];
  municipios:Municipio[];
  codigoProvinciaSel:number;
  constructor(private poblacionesService:PoblacionesService){
    poblacionesService.provincias()
    .subscribe(data=>this.provincias=data);
  }
  municipiosProv():void{
    this.poblacionesService.municipiosProvincia(this.codigoProvinciaSel)
    .subscribe(data=>this.municipios=data);
  }
}
