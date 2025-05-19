import { Municipio } from './../../model/municipio';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Provincia } from '../../model/provincia';
import { ProvinciasService } from '../../service/provincias.service';

@Component({
  selector: 'app-provincias',
  imports: [CommonModule, FormsModule, ],
  templateUrl: './provincias.component.html',
  styleUrl: './provincias.component.css'
})

export class ProvinciasComponent implements OnInit {
  provincias: Provincia[] = [];
  municipios: Municipio[] = [];
  provinciaSeleccionada: string = '';

  constructor(private provinciasService: ProvinciasService) {}

  ngOnInit(): void {
    this.provinciasService.obtenerProvincias().subscribe(response => {
      this.provincias = response.provincias;
    });
  }

  onProvinciaSeleccionada(codProv: string): void {
    this.provinciaSeleccionada = codProv;
    this.provinciasService.obtenerMunicipios(codProv).subscribe(data => {
      this.municipios = data;
    });
  }
}
