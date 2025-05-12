import { Component } from '@angular/core';
import { Pais } from '../../model/pais';
import { PaisesService } from '../../service/paises.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-paises',
  imports: [CommonModule, FormsModule],
  templateUrl: './paises.component.html',
  styleUrl: './paises.component.css'
})
export class PaisesComponent {

  paises:Pais[];
  constructor(private paisesService:PaisesService){

  }

  verPaises():void{
    this.paisesService.obtenerPaises().subscribe(data => this.paises = data);
    console.log(this.paises);
  }
}
