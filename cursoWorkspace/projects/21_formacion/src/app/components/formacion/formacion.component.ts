import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FormacionService } from '../../Service/formacion.service';
import { Matricula } from '../../model/Matricula';

@Component({
  selector: 'app-formacion',
  imports: [FormsModule,CommonModule],
  templateUrl: './formacion.component.html',
  styleUrl: './formacion.component.css'
})
export class FormacionComponent {

  idCodigo:number;
  matricula:Matricula;
  alumnoSeleccionado:string;
  cursoSeleccionado:number;

  constructor(private formacionService: FormacionService){}

  buscar(){
    return this.formacionService.cursos();
  }

  buscarIdCurso(){
    return this.formacionService.findByNoMatriculadoEnCurso(this.idCodigo);
  }

  matricular(){
    const matricula:Matricula = new Matricula(this.cursoSeleccionado,this.alumnoSeleccionado);
    this.formacionService.matricular(matricula);
  }
}
