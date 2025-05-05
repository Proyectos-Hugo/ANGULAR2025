import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Pagina } from '../model/pagina';

@Component({
  selector: 'app-filtro',
  imports: [FormsModule, CommonModule],
  templateUrl: './filtro.component.html',
  styleUrl: './filtro.component.css'
})

export class FiltroComponent {

  temas:string;
  resultado:Pagina[];
  visible:boolean = false;

  datos = [
      new Pagina("deporte", "www.clubrubenuria.com"),
      new Pagina("ciencia", "www.abc/ciencia.com"),
      new Pagina("deporte","www.as.com"),
      new Pagina("libros", "www.casadellibro.com"),
      new Pagina("cocina", "www.masterchef.com"),
      new Pagina("ciencia", "www.nasa.com")
  ];

  filtrar(){
    this.visible = true;
    this.resultado = this.datos.filter((pagina => pagina.tematica == this.temas));
    this.temas = "";
  }
}
