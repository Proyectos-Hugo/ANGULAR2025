import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatricularService } from '../service/matricular.service';
import { Curso } from '../model/curso';
import { Matricula } from '../model/matricula';

@Component({
  selector: 'app-matricular',
  imports: [FormsModule, CommonModule],
  templateUrl: './matricular.component.html',
  styleUrl: './matricular.component.css'
})
export class MatricularComponent implements OnInit{

  constructor(private matriculaService:MatricularService){}

  cursos:Curso[] = [];
  idCursoSeleccionado = 0;
  matriculas:Matricula[] = [];

  ngOnInit(): void {
    this.matriculaService.cursos().subscribe(
      data => {
        this.cursos = data;
        console.log("Datos Curso", this.cursos)
      }
    );
  }

  getAlumnosMatriculados(idCursoSeleccionado:number){
    this.matriculaService.matricula(idCursoSeleccionado).subscribe(
      data => {
        this.matriculas = data;
        console.log("Alumnos matriculados", this.matriculas);
      }
    )
  }
}
